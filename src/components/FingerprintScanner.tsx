import { useEffect, useRef } from 'react';

export const FingerprintScanner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    const centerX = 150;
    const centerY = 150;

    // Draw fingerprint pattern with curved lines
    const drawFingerprint = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set line style
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.6)';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      // Draw curved fingerprint lines
      for (let i = 0; i < 10; i++) {
        const baseRadius = 30 + i * 15;
        
        ctx.beginPath();
        
        // Create curved path for each ridge
        for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
          const noise = Math.sin(angle * 5 + i * 0.5) * 8;
          const radius = baseRadius + noise;
          
          // Add more variation to create fingerprint-like curves
          const offsetX = Math.cos(angle * 3) * 3;
          const offsetY = Math.sin(angle * 2) * 3;
          
          const x = centerX + Math.cos(angle) * radius + offsetX;
          const y = centerY + Math.sin(angle) * radius + offsetY;
          
          if (angle === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.closePath();
        ctx.stroke();
      }

      // Add some broken segments for realism
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.7)';
      for (let i = 0; i < 5; i++) {
        const radius = 60 + i * 20;
        const startAngle = Math.PI * 0.1 + i * 0.3;
        const endAngle = startAngle + Math.PI * 0.8;
        
        ctx.beginPath();
        for (let angle = startAngle; angle < endAngle; angle += 0.05) {
          const noise = Math.sin(angle * 4) * 6;
          const r = radius + noise;
          const x = centerX + Math.cos(angle) * r;
          const y = centerY + Math.sin(angle) * r;
          
          if (angle === startAngle) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    drawFingerprint();
  }, []);

  return (
    <div className="relative w-[300px] h-[300px]">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};
