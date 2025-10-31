import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

type ShapeType = 'finx' | 'dna' | 'helix' | 'network' | 'galaxy';

export const ConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const currentShapeRef = useRef<ShapeType>('finx');
  const animationFrameRef = useRef<number>();

  const createParticles = (count: number): Particle[] => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      targetX: 0,
      targetY: 0,
      vx: 0,
      vy: 0,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
    }));
  };

  const getShapePoints = (shape: ShapeType, centerX: number, centerY: number, scale: number): [number, number][] => {
    switch (shape) {
      case 'finx':
        return getFinXPoints(centerX, centerY, scale);
      case 'dna':
        return getDNAPoints(centerX, centerY, scale);
      case 'helix':
        return getHelixPoints(centerX, centerY, scale);
      case 'network':
        return getNetworkPoints(centerX, centerY, scale);
      case 'galaxy':
        return getGalaxyPoints(centerX, centerY, scale);
      default:
        return [];
    }
  };

  const getFinXPoints = (cx: number, cy: number, scale: number): [number, number][] => {
    const points: [number, number][] = [];
    const density = 3; // Расстояние между точками
    const letterSpacing = scale * 0.8;
    const height = scale * 1.5;
    const strokeWidth = scale * 0.08;
    
    // F
    let startX = cx - letterSpacing * 1.8;
    // Вертикальная линия F
    for (let y = 0; y < height; y += density) {
      for (let x = 0; x < strokeWidth; x += density) {
        points.push([startX + x, cy - height / 2 + y]);
      }
    }
    // Верхняя горизонтальная линия F
    for (let x = 0; x < scale * 0.5; x += density) {
      for (let y = 0; y < strokeWidth; y += density) {
        points.push([startX + x, cy - height / 2 + y]);
      }
    }
    // Средняя горизонтальная линия F
    for (let x = 0; x < scale * 0.35; x += density) {
      for (let y = 0; y < strokeWidth; y += density) {
        points.push([startX + x, cy - height / 2 + height * 0.45 + y]);
      }
    }
    
    // i
    startX += letterSpacing * 0.8;
    // Вертикальная линия i
    for (let y = height * 0.25; y < height; y += density) {
      for (let x = 0; x < strokeWidth; x += density) {
        points.push([startX + x, cy - height / 2 + y]);
      }
    }
    // Точка над i
    for (let x = 0; x < strokeWidth; x += density) {
      for (let y = 0; y < strokeWidth; y += density) {
        points.push([startX + x, cy - height / 2 + height * 0.1 + y]);
      }
    }
    
    // n
    startX += letterSpacing * 0.8;
    // Левая вертикальная линия n
    for (let y = 0; y < height; y += density) {
      for (let x = 0; x < strokeWidth; x += density) {
        points.push([startX + x, cy - height / 2 + y]);
      }
    }
    // Арка n
    const archWidth = scale * 0.4;
    const archHeight = height * 0.7;
    for (let i = 0; i <= 30; i++) {
      const t = i / 30;
      const angle = Math.PI * t;
      const archX = startX + strokeWidth / 2 + Math.sin(angle) * (archWidth / 2);
      const archY = cy - height / 2 + height * 0.3 + (1 - Math.cos(angle)) * (archHeight / 2);
      for (let r = 0; r < strokeWidth; r += density) {
        const offsetAngle = angle + Math.PI / 2;
        points.push([
          archX + Math.cos(offsetAngle) * r,
          archY + Math.sin(offsetAngle) * r
        ]);
      }
    }
    // Правая вертикальная линия n
    for (let y = height * 0.3; y < height; y += density) {
      for (let x = 0; x < strokeWidth; x += density) {
        points.push([startX + archWidth + x, cy - height / 2 + y]);
      }
    }
    
    // X
    startX += letterSpacing * 1.1;
    const xWidth = scale * 0.6;
    // Диагональ X слева направо сверху вниз
    for (let i = 0; i < height; i += density) {
      const t = i / height;
      const baseX = startX + t * xWidth;
      const baseY = cy - height / 2 + i;
      for (let w = 0; w < strokeWidth; w += density) {
        points.push([baseX + w, baseY]);
        points.push([baseX, baseY + w]);
      }
    }
    // Диагональ X справа налево сверху вниз
    for (let i = 0; i < height; i += density) {
      const t = i / height;
      const baseX = startX + xWidth - t * xWidth;
      const baseY = cy - height / 2 + i;
      for (let w = 0; w < strokeWidth; w += density) {
        points.push([baseX + w, baseY]);
        points.push([baseX, baseY + w]);
      }
    }
    
    return points;
  };

  const getDNAPoints = (cx: number, cy: number, scale: number): [number, number][] => {
    const points: [number, number][] = [];
    const height = scale * 3;
    const turns = 3;
    
    for (let i = 0; i < 200; i++) {
      const t = (i / 200) * turns * Math.PI * 2;
      const y = cy - height / 2 + (i / 200) * height;
      
      // Left helix
      const x1 = cx - scale * 0.5 + Math.cos(t) * scale * 0.8;
      points.push([x1, y]);
      
      // Right helix
      const x2 = cx + scale * 0.5 - Math.cos(t) * scale * 0.8;
      points.push([x2, y]);
      
      // Connecting bars
      if (i % 15 === 0) {
        for (let j = 0; j < 10; j++) {
          const barX = x1 + (x2 - x1) * (j / 10);
          points.push([barX, y]);
        }
      }
    }
    
    return points;
  };

  const getHelixPoints = (cx: number, cy: number, scale: number): [number, number][] => {
    const points: [number, number][] = [];
    const radius = scale * 1.2;
    const height = scale * 2.5;
    
    for (let i = 0; i < 150; i++) {
      const t = (i / 150) * Math.PI * 6;
      const r = radius * (1 - (i / 150) * 0.3);
      const x = cx + Math.cos(t) * r;
      const y = cy - height / 2 + (i / 150) * height;
      points.push([x, y]);
    }
    
    return points;
  };

  const getNetworkPoints = (cx: number, cy: number, scale: number): [number, number][] => {
    const points: [number, number][] = [];
    const nodes = 8;
    const radius = scale * 1.5;
    
    for (let i = 0; i < nodes; i++) {
      const angle = (i / nodes) * Math.PI * 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      
      for (let j = 0; j < 15; j++) {
        const offset = (Math.random() - 0.5) * 20;
        points.push([x + offset, y + offset]);
      }
      
      // Connect to center
      for (let k = 0; k < 10; k++) {
        const t = k / 10;
        points.push([cx + (x - cx) * t, cy + (y - cy) * t]);
      }
    }
    
    return points;
  };

  const getGalaxyPoints = (cx: number, cy: number, scale: number): [number, number][] => {
    const points: [number, number][] = [];
    const arms = 3;
    
    for (let arm = 0; arm < arms; arm++) {
      for (let i = 0; i < 100; i++) {
        const t = (i / 100) * Math.PI * 4;
        const r = (i / 100) * scale * 1.8;
        const armAngle = (arm / arms) * Math.PI * 2;
        const angle = armAngle + t;
        
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        
        for (let j = 0; j < 2; j++) {
          const offset = (Math.random() - 0.5) * 30;
          points.push([x + offset, y + offset]);
        }
      }
    }
    
    // Center cluster
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * scale * 0.3;
      points.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
    }
    
    return points;
  };

  const assignTargets = (particles: Particle[], shape: ShapeType) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const scale = Math.min(window.innerWidth, window.innerHeight) / 6;
    
    const shapePoints = getShapePoints(shape, centerX, centerY, scale);
    
    particles.forEach((particle, i) => {
      const point = shapePoints[i % shapePoints.length];
      if (point) {
        particle.targetX = point[0];
        particle.targetY = point[1];
      }
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = 'rgba(12, 33, 26, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle) => {
      const dx = particle.targetX - particle.x;
      const dy = particle.targetY - particle.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      const force = 0.0008;
      particle.vx += dx * force;
      particle.vy += dy * force;
      
      particle.vx *= 0.95;
      particle.vy *= 0.95;
      
      particle.x += particle.vx;
      particle.y += particle.vy;

      const proximityOpacity = Math.max(0.4, Math.min(1, 1 - dist / 200));
      const finalOpacity = particle.opacity * proximityOpacity;

      const glowSize = particle.size * 4;
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, glowSize
      );
      gradient.addColorStop(0, `rgba(255, 220, 140, ${finalOpacity})`);
      gradient.addColorStop(0.2, `rgba(255, 190, 100, ${finalOpacity * 0.7})`);
      gradient.addColorStop(0.5, `rgba(255, 160, 70, ${finalOpacity * 0.4})`);
      gradient.addColorStop(1, 'rgba(255, 200, 100, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255, 240, 200, ${finalOpacity})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 1.2, 0, Math.PI * 2);
      ctx.fill();
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      assignTargets(particlesRef.current, currentShapeRef.current);
    };

    resize();
    window.addEventListener('resize', resize);

    particlesRef.current = createParticles(1200);
    assignTargets(particlesRef.current, 'finx');

    animate();

    const shapes: ShapeType[] = ['finx', 'dna', 'helix', 'network', 'galaxy'];
    let shapeIndex = 0;

    const shapeInterval = setInterval(() => {
      shapeIndex = (shapeIndex + 1) % shapes.length;
      currentShapeRef.current = shapes[shapeIndex];
      assignTargets(particlesRef.current, shapes[shapeIndex]);
    }, 10000);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearInterval(shapeInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ background: 'linear-gradient(to bottom, hsl(var(--cosmic-dark)), hsl(var(--cosmic-bg)))' }}
    />
  );
};
