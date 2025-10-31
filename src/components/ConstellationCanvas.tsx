import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  depth: number;
  phase: number;
  speed: number;
  hue: number;
}

export const ConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouseRef = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = 2500;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;

      for (let i = 0; i < particleCount; i++) {
        // Сферическое распределение с большей плотностью в центре
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.pow(Math.random(), 0.6) * radius;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          size: Math.random() * 2 + 0.8,
          opacity: Math.random() * 0.6 + 0.4,
          depth: Math.random(),
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.4 + 0.2,
          hue: 25 + Math.random() * 20 // Золотисто-оранжевый диапазон (25-45)
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Темно-зеленый градиентный фон как у Calico
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, 'rgba(0, 20, 20, 0.95)');
      bgGradient.addColorStop(0.5, 'rgba(5, 30, 25, 0.95)');
      bgGradient.addColorStop(1, 'rgba(0, 15, 15, 0.95)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      mouseRef.x += (mouseRef.targetX - mouseRef.x) * 0.1;
      mouseRef.y += (mouseRef.targetY - mouseRef.y) * 0.1;

      const time = Date.now() * 0.001;

      particles.forEach((particle) => {
        // Плавное органическое движение
        const floatX = Math.sin(time * particle.speed + particle.phase) * 25;
        const floatY = Math.cos(time * particle.speed + particle.phase * 1.3) * 25;

        // Параллакс эффект
        const parallaxX = (mouseRef.x - canvas.width / 2) * particle.depth * 0.08;
        const parallaxY = (mouseRef.y - canvas.height / 2) * particle.depth * 0.08;

        const targetX = particle.baseX + floatX + parallaxX;
        const targetY = particle.baseY + floatY + parallaxY;

        const dx = targetX - particle.x;
        const dy = targetY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0.3) {
          particle.vx += dx * 0.001;
          particle.vy += dy * 0.001;
        }

        particle.vx *= 0.94;
        particle.vy *= 0.94;

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Расчет яркости в зависимости от расстояния от центра
        const centerDist = Math.sqrt(
          Math.pow(particle.x - canvas.width / 2, 2) + 
          Math.pow(particle.y - canvas.height / 2, 2)
        );
        const maxDist = Math.min(canvas.width, canvas.height) * 0.45;
        const distanceFactor = Math.max(0, 1 - (centerDist / maxDist));
        const brightness = 50 + distanceFactor * 30;

        // Золотисто-оранжевый градиент как у Calico
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        
        const alpha = particle.opacity * (0.3 + distanceFactor * 0.7);
        const saturation = 70 + distanceFactor * 30;
        
        gradient.addColorStop(0, `hsla(${particle.hue}, ${saturation}%, ${brightness}%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(${particle.hue}, ${saturation}%, ${brightness * 0.7}%, ${alpha * 0.6})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, ${saturation}%, ${brightness * 0.5}%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.targetX = e.clientX;
      mouseRef.targetY = e.clientY;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: 'linear-gradient(to bottom, #001414 0%, #051e19 50%, #000f0f 100%)',
      }}
    />
  );
};