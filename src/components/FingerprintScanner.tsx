import { useEffect, useRef, useState } from 'react';

export const FingerprintScanner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    let animationId: number;
    let scanProgress = 0;
    let pulsePhase = 0;

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
      
      // Subtle gradient background
      const bgGradient = ctx.createRadialGradient(150, 150, 0, 150, 150, 150);
      bgGradient.addColorStop(0, 'rgba(6, 182, 212, 0.05)');
      bgGradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.03)');
      bgGradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, 300, 300);

      // Draw fingerprint ridges with improved visuals
      ridges.forEach((ridge, ridgeIndex) => {
        const scanned = isScanning && scanProgress > ridgeIndex * 6;
        const opacity = scanned ? 0.85 : 0.35;
        const glowIntensity = scanned ? 1 : 0;
        
        // Glow effect for scanned areas
        if (glowIntensity > 0) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = `rgba(6, 182, 212, ${glowIntensity * 0.8})`;
        } else {
          ctx.shadowBlur = 2;
          ctx.shadowColor = 'rgba(16, 185, 129, 0.2)';
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

      // Enhanced scanning line animation
      if (isScanning) {
        scanProgress += 1.8;
        if (scanProgress > 150) {
          scanProgress = 0;
        }

        const scanY = 10 + scanProgress;
        
        // Main scan line with glow
        const lineGradient = ctx.createLinearGradient(0, scanY - 25, 0, scanY + 25);
        lineGradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
        lineGradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.3)');
        lineGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.9)');
        lineGradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.3)');
        lineGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        
        ctx.fillStyle = lineGradient;
        ctx.fillRect(30, scanY - 25, 240, 50);
        
        // Bright center line
        ctx.strokeStyle = 'rgba(6, 182, 212, 1)';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(6, 182, 212, 0.8)';
        ctx.beginPath();
        ctx.moveTo(30, scanY);
        ctx.lineTo(270, scanY);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Pulse effect when not scanning
      if (!isScanning) {
        pulsePhase += 0.04;
        const pulseOpacity = Math.sin(pulsePhase) * 0.15 + 0.25;
        const pulseRadius = 115 + Math.sin(pulsePhase) * 5;
        
        ctx.strokeStyle = `rgba(6, 182, 212, ${pulseOpacity})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(6, 182, 212, ${pulseOpacity})`;
        ctx.beginPath();
        ctx.arc(150, 150, pulseRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Auto-start scanning after 1 second
    const startTimeout = setTimeout(() => {
      setIsScanning(true);
      
      // Stop scanning after 3 seconds
      const stopTimeout = setTimeout(() => {
        setIsScanning(false);
        scanProgress = 0;
      }, 3000);

      return () => clearTimeout(stopTimeout);
    }, 1000);

    // Restart cycle every 5 seconds
    const cycleInterval = setInterval(() => {
      setIsScanning(true);
      scanProgress = 0;
      
      setTimeout(() => {
        setIsScanning(false);
      }, 3000);
    }, 5000);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(startTimeout);
      clearInterval(cycleInterval);
    };
  }, [isScanning]);

  return (
    <div className="relative">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};