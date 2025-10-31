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
    let scanDirection = 1; // 1 for down, -1 for up
    let pulsePhase = 0;

    // Generate fingerprint ridges
    const ridges = [];
    const centerX = 150;
    const centerY = 150;
    
    for (let i = 0; i < 12; i++) {
      const radius = 30 + i * 10;
      const points = Math.floor(radius * 2);
      const ridge = [];
      
      for (let j = 0; j < points; j++) {
        const angle = (j / points) * Math.PI * 2;
        const noise = Math.sin(j * 0.3) * 3;
        const r = radius + noise;
        ridge.push({
          x: centerX + Math.cos(angle) * r,
          y: centerY + Math.sin(angle) * r
        });
      }
      ridges.push(ridge);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Gradient background
      const bgGradient = ctx.createRadialGradient(150, 150, 0, 150, 150, 150);
      bgGradient.addColorStop(0, 'rgba(16, 185, 129, 0.03)');
      bgGradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, 300, 300);

      // Draw fingerprint ridges
      ridges.forEach((ridge, ridgeIndex) => {
        const ridgeY = 30 + ridgeIndex * 10;
        const scanY = 20 + scanProgress;
        
        // Glow when scan line is below the ridge (has passed it going down)
        const isScanned = isScanning && scanY > ridgeY;
        const opacity = isScanned ? 0.9 : 0.3;
        const glowIntensity = isScanned ? 1 : 0;
        
        // Glow effect
        if (glowIntensity > 0) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(16, 185, 129, ${glowIntensity})`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        
        ridge.forEach((point, i) => {
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });
        ctx.closePath();
        ctx.stroke();
      });

      ctx.shadowBlur = 0;

      // Scanning line
      if (isScanning) {
        scanProgress += 0.8 * scanDirection;
        
        // Change direction at boundaries
        if (scanProgress > 140) {
          scanDirection = -1;
        } else if (scanProgress < 0) {
          scanDirection = 1;
          scanProgress = 0;
        }

        const scanY = 20 + scanProgress;
        const lineGradient = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
        lineGradient.addColorStop(0, 'rgba(234, 179, 8, 0)'); // yellow
        lineGradient.addColorStop(0.5, 'rgba(234, 179, 8, 0.9)');
        lineGradient.addColorStop(1, 'rgba(234, 179, 8, 0)');
        
        ctx.fillStyle = lineGradient;
        ctx.fillRect(40, scanY - 20, 220, 40);
      }

      // Pulse effect when not scanning
      if (!isScanning) {
        pulsePhase += 0.05;
        const pulseOpacity = Math.sin(pulsePhase) * 0.2 + 0.3;
        
        ctx.strokeStyle = `rgba(16, 185, 129, ${pulseOpacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(150, 150, 120, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Auto-start scanning after 1 second
    const startTimeout = setTimeout(() => {
      setIsScanning(true);
      
      // Stop scanning after 3 seconds, then restart cycle
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
