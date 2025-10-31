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
    const spacing = 8;
    
    // F
    for (let i = 0; i < 50; i++) points.push([cx - scale * 2, cy - scale + i * spacing]);
    for (let i = 0; i < 30; i++) points.push([cx - scale * 2 + i * spacing, cy - scale]);
    for (let i = 0; i < 25; i++) points.push([cx - scale * 2 + i * spacing, cy - scale / 2]);
    
    // i
    for (let i = 0; i < 50; i++) points.push([cx - scale * 0.8, cy - scale + i * spacing]);
    points.push([cx - scale * 0.8, cy - scale * 1.3]);
    
    // n
    for (let i = 0; i < 50; i++) points.push([cx - scale * 0.2, cy - scale + i * spacing]);
    for (let i = 0; i < 20; i++) points.push([cx - scale * 0.2 + i * spacing * 0.5, cy - scale + i * spacing]);
    for (let i = 0; i < 50; i++) points.push([cx + scale * 0.3, cy - scale + i * spacing]);
    
    // X
    for (let i = 0; i < 50; i++) {
      points.push([cx + scale + i * spacing * 0.5, cy - scale + i * spacing]);
      points.push([cx + scale * 1.8 - i * spacing * 0.5, cy - scale + i * spacing]);
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
      
      particle.vx += dx * 0.002;
      particle.vy += dy * 0.002;
      
      particle.vx *= 0.9;
      particle.vy *= 0.9;
      
      particle.x += particle.vx;
      particle.y += particle.vy;

      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      gradient.addColorStop(0, `rgba(255, 200, 100, ${particle.opacity})`);
      gradient.addColorStop(0.5, `rgba(255, 160, 60, ${particle.opacity * 0.5})`);
      gradient.addColorStop(1, 'rgba(255, 200, 100, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255, 220, 150, ${particle.opacity})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
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

    particlesRef.current = createParticles(600);
    assignTargets(particlesRef.current, 'finx');

    animate();

    const shapes: ShapeType[] = ['finx', 'dna', 'helix', 'network', 'galaxy'];
    let shapeIndex = 0;

    const shapeInterval = setInterval(() => {
      shapeIndex = (shapeIndex + 1) % shapes.length;
      currentShapeRef.current = shapes[shapeIndex];
      assignTargets(particlesRef.current, shapes[shapeIndex]);
    }, 6000);

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
