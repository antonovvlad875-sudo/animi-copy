import { useEffect, useRef, useState } from 'react';

export const FingerprintScanner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scanDirectionRef = useRef(1); // 1 for down, -1 for up

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    let animationId: number;
    let scanProgress = 0;

    // Generate more realistic fingerprint ridges with curves
    const ridges = [];
    const centerX = 150;
    const centerY = 150;
    
    // Create curved fingerprint pattern
    for (let i = 0; i < 15; i++) {
      const baseRadius = 25 + i * 8;
      const points = Math.floor(baseRadius * 3);
      const ridge = [];
      
      for (let j = 0; j < points; j++) {
        const angle = (j / points) * Math.PI * 2;
        
        // Create natural fingerprint variations
        const waveNoise = Math.sin(angle * 8 + i * 0.5) * 2;
        const curvature = Math.sin(angle * 3) * 4;
        const randomNoise = Math.sin(j * 0.2 + i) * 1.5;
        
        const r = baseRadius + waveNoise + curvature + randomNoise;
        
        ridge.push({
          x: centerX + Math.cos(angle) * r,
          y: centerY + Math.sin(angle) * r
        });
      }
      ridges.push(ridge);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Continuous scanning line animation - calculate scanY first
      scanProgress += 2.2 * scanDirectionRef.current;
      
      // Reverse direction at boundaries
      if (scanProgress >= 265) {
        scanProgress = 265;
        scanDirectionRef.current = -1;
      } else if (scanProgress <= 0) {
        scanProgress = 0;
        scanDirectionRef.current = 1;
      }

      const scanY = 10 + scanProgress;
      
      // Subtle gradient background
      const bgGradient = ctx.createRadialGradient(150, 150, 0, 150, 150, 150);
      bgGradient.addColorStop(0, 'rgba(6, 182, 212, 0.05)');
      bgGradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.03)');
      bgGradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, 300, 300);

      // Draw fingerprint ridges with scanning effect
      ridges.forEach((ridge) => {
        // Find the topmost point (minimum Y) of this ridge
        const minY = Math.min(...ridge.map(point => point.y));
        
        // Scanning effect:
        // When going DOWN - light up ridges where top is ABOVE the scan line
        // When going UP - light up ridges where top is BELOW the scan line
        const scanned = scanDirectionRef.current === 1 
          ? minY <= scanY  // Going down: light up if top of ridge is above scan line
          : minY >= scanY; // Going up: light up only if top of ridge is below scan line
        
        const opacity = scanned ? 0.9 : 0.25;
        const glowIntensity = scanned ? 1 : 0;
        
        // Glow effect for scanned areas
        if (glowIntensity > 0) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = `rgba(6, 182, 212, ${glowIntensity})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.shadowColor = 'transparent';
        }

        // Use cyan-emerald gradient for ridges
        const gradient = ctx.createLinearGradient(
          centerX - 100, centerY - 100,
          centerX + 100, centerY + 100
        );
        gradient.addColorStop(0, `rgba(6, 182, 212, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(16, 185, 129, ${opacity})`);
        gradient.addColorStop(1, `rgba(5, 150, 105, ${opacity})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = scanned ? 3 : 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        
        ridge.forEach((point, i) => {
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            // Use quadratic curves for smoother lines
            const prevPoint = ridge[i - 1];
            const cpX = (prevPoint.x + point.x) / 2;
            const cpY = (prevPoint.y + point.y) / 2;
            ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, cpX, cpY);
          }
        });
        ctx.closePath();
        ctx.stroke();
      });

      ctx.shadowBlur = 0;
      
      // Simple thin neon line without glow - longer line
      ctx.strokeStyle = 'rgba(6, 182, 212, 1)';
      ctx.lineWidth = 2;
      ctx.lineCap = 'butt';
      ctx.beginPath();
      ctx.moveTo(10, scanY);
      ctx.lineTo(290, scanY);
      ctx.stroke();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};