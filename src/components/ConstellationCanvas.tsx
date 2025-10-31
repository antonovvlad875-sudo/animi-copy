import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  phase: number;
  speed: number;
  depth: number;
}

type ShapeType = 'finx' | 'starburst' | 'network' | 'spiral' | 'constellation';

export const ConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const currentShapeRef = useRef<ShapeType>('finx');
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [, setForceUpdate] = useState(0);

  const createParticles = (count: number): Particle[] => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      baseX: 0,
      baseY: 0,
      targetX: 0,
      targetY: 0,
      vx: 0,
      vy: 0,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.6,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.5 + 0.5,
      depth: Math.random() * 0.5 + 0.5,
    }));
  };

  const getShapePoints = (shape: ShapeType, centerX: number, centerY: number, scale: number): [number, number][] => {
    switch (shape) {
      case 'finx':
        return getFinXPoints(centerX, centerY, scale);
      case 'starburst':
        return getStarburstPoints(centerX, centerY, scale);
      case 'network':
        return getNetworkPoints(centerX, centerY, scale);
      case 'spiral':
        return getSpiralPoints(centerX, centerY, scale);
      case 'constellation':
        return getConstellationPoints(centerX, centerY, scale);
      default:
        return [];
    }
  };

  const getFinXPoints = (cx: number, cy: number, scale: number): [number, number][] => {
    const points: [number, number][] = [];
    const density = 2.5;
    const letterSpacing = scale * 0.85;
    const height = scale * 1.6;
    const strokeWidth = scale * 0.1;
    
    let startX = cx - letterSpacing * 1.9;
    
    // F
    for (let y = 0; y < height; y += density) {
      for (let x = 0; x < strokeWidth; x += density) {
        points.push([startX + x, cy - height / 2 + y]);
      }
    }
    for (let x = 0; x < scale * 0.55; x += density) {
      for (let y = 0; y < strokeWidth; y += density) {
        points.push([startX + x, cy - height / 2 + y]);
      }
    }
    for (let x = 0; x < scale * 0.4; x += density) {
      for (let y = 0; y < strokeWidth; y += density) {
        points.push([startX + x, cy - height / 2 + height * 0.45 + y]);
      }
    }
    
    // i
    startX += letterSpacing * 0.85;
    for (let y = height * 0.25; y < height; y += density) {
      for (let x = 0; x < strokeWidth; x += density) {
        points.push([startX + x, cy - height / 2 + y]);
      }
    }
    for (let x = 0; x < strokeWidth; x += density) {
      for (let y = 0; y < strokeWidth; y += density) {
        points.push([startX + x, cy - height / 2 + height * 0.08 + y]);
      }
    }
    
    // n
    startX += letterSpacing * 0.85;
    for (let y = 0; y < height; y += density) {
      for (let x = 0; x < strokeWidth; x += density) {
        points.push([startX + x, cy - height / 2 + y]);
      }
    }
    const archWidth = scale * 0.45;
    const archHeight = height * 0.75;
    for (let i = 0; i <= 40; i++) {
      const t = i / 40;
      const angle = Math.PI * t;
      const archX = startX + strokeWidth / 2 + Math.sin(angle) * (archWidth / 2);
      const archY = cy - height / 2 + height * 0.25 + (1 - Math.cos(angle)) * (archHeight / 2);
      for (let r = 0; r < strokeWidth; r += density) {
        const offsetAngle = angle + Math.PI / 2;
        points.push([
          archX + Math.cos(offsetAngle) * r,
          archY + Math.sin(offsetAngle) * r
        ]);
      }
    }
    for (let y = height * 0.25; y < height; y += density) {
      for (let x = 0; x < strokeWidth; x += density) {
        points.push([startX + archWidth + x, cy - height / 2 + y]);
      }
    }
    
    // X
    startX += letterSpacing * 1.15;
    const xWidth = scale * 0.65;
    for (let i = 0; i < height; i += density) {
      const t = i / height;
      const baseX = startX + t * xWidth;
      const baseY = cy - height / 2 + i;
      for (let w = 0; w < strokeWidth; w += density) {
        points.push([baseX + w, baseY]);
        points.push([baseX, baseY + w]);
      }
    }
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

  const getStarburstPoints = (cx: number, cy: number, scale: number): [number, number][] => {
    const points: [number, number][] = [];
    const rays = 12;
    const density = 3;
    
    for (let ray = 0; ray < rays; ray++) {
      const angle = (ray / rays) * Math.PI * 2;
      const rayLength = scale * 1.8;
      
      for (let i = 0; i < 100; i++) {
        const t = i / 100;
        const distance = t * rayLength;
        const width = (1 - t) * scale * 0.15;
        
        for (let w = -width; w <= width; w += density) {
          const x = cx + Math.cos(angle) * distance + Math.cos(angle + Math.PI / 2) * w;
          const y = cy + Math.sin(angle) * distance + Math.sin(angle + Math.PI / 2) * w;
          points.push([x, y]);
        }
      }
    }
    
    // Center glow
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * scale * 0.3;
      points.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
    }
    
    return points;
  };

  const getNetworkPoints = (cx: number, cy: number, scale: number): [number, number][] => {
    const points: [number, number][] = [];
    const nodes = 9;
    const radius = scale * 1.5;
    const density = 3;
    
    const nodePositions: [number, number][] = [];
    for (let i = 0; i < nodes; i++) {
      const angle = (i / nodes) * Math.PI * 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      nodePositions.push([x, y]);
      
      // Node clusters
      for (let j = 0; j < 25; j++) {
        const nodeAngle = Math.random() * Math.PI * 2;
        const nodeR = Math.random() * scale * 0.12;
        points.push([x + Math.cos(nodeAngle) * nodeR, y + Math.sin(nodeAngle) * nodeR]);
      }
    }
    
    // Connections between nodes
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (Math.random() > 0.5) {
          const [x1, y1] = nodePositions[i];
          const [x2, y2] = nodePositions[j];
          
          for (let k = 0; k < 15; k++) {
            const t = k / 15;
            points.push([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]);
          }
        }
      }
    }
    
    // Center cluster
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * scale * 0.25;
      points.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
    }
    
    return points;
  };

  const getSpiralPoints = (cx: number, cy: number, scale: number): [number, number][] => {
    const points: [number, number][] = [];
    const arms = 3;
    const density = 2;
    
    for (let arm = 0; arm < arms; arm++) {
      const armAngle = (arm / arms) * Math.PI * 2;
      
      for (let i = 0; i < 150; i++) {
        const t = i / 150;
        const spiralAngle = t * Math.PI * 5;
        const r = t * scale * 2;
        const angle = armAngle + spiralAngle;
        
        const width = scale * 0.08 * (1 - t * 0.3);
        
        for (let w = -width; w <= width; w += density) {
          const x = cx + Math.cos(angle) * r + Math.cos(angle + Math.PI / 2) * w;
          const y = cy + Math.sin(angle) * r + Math.sin(angle + Math.PI / 2) * w;
          points.push([x, y]);
        }
      }
    }
    
    // Center
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * scale * 0.25;
      points.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
    }
    
    return points;
  };

  const getConstellationPoints = (cx: number, cy: number, scale: number): [number, number][] => {
    const points: [number, number][] = [];
    const stars = 15;
    const density = 3;
    
    const starPositions: [number, number][] = [];
    for (let i = 0; i < stars; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * scale * 1.3;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      starPositions.push([x, y]);
      
      // Star clusters
      const starSize = Math.random() * 20 + 15;
      for (let j = 0; j < starSize; j++) {
        const starAngle = Math.random() * Math.PI * 2;
        const starR = Math.random() * scale * 0.08;
        points.push([x + Math.cos(starAngle) * starR, y + Math.sin(starAngle) * starR]);
      }
    }
    
    // Connecting lines
    for (let i = 0; i < starPositions.length - 1; i++) {
      if (Math.random() > 0.6) {
        const [x1, y1] = starPositions[i];
        const [x2, y2] = starPositions[i + 1];
        
        for (let k = 0; k < 12; k++) {
          const t = k / 12;
          points.push([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]);
        }
      }
    }
    
    return points;
  };

  const assignTargets = (particles: Particle[], shape: ShapeType) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const scale = Math.min(window.innerWidth, window.innerHeight) / 5.5;
    
    const shapePoints = getShapePoints(shape, centerX, centerY, scale);
    
    particles.forEach((particle, i) => {
      const point = shapePoints[i % shapePoints.length];
      if (point) {
        particle.targetX = point[0];
        particle.targetY = point[1];
        particle.baseX = point[0];
        particle.baseY = point[1];
      }
    });
  };

  const animate = (time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Smooth mouse movement
    mouseRef.current.targetX += (mouseRef.current.x - mouseRef.current.targetX) * 0.05;
    mouseRef.current.targetY += (mouseRef.current.y - mouseRef.current.targetY) * 0.05;

    const parallaxX = (mouseRef.current.targetX - window.innerWidth / 2) * 0.03;
    const parallaxY = (mouseRef.current.targetY - window.innerHeight / 2) * 0.03;

    ctx.fillStyle = 'rgba(8, 25, 20, 0.12)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle) => {
      // Organic floating motion
      const floatX = Math.sin(time * 0.0005 * particle.speed + particle.phase) * 15;
      const floatY = Math.cos(time * 0.0007 * particle.speed + particle.phase) * 15;
      
      const finalTargetX = particle.baseX + floatX + parallaxX * particle.depth;
      const finalTargetY = particle.baseY + floatY + parallaxY * particle.depth;
      
      const dx = finalTargetX - particle.x;
      const dy = finalTargetY - particle.y;
      
      const force = 0.0012;
      particle.vx += dx * force;
      particle.vy += dy * force;
      
      particle.vx *= 0.93;
      particle.vy *= 0.93;
      
      particle.x += particle.vx;
      particle.y += particle.vy;

      const dist = Math.sqrt(dx * dx + dy * dy);
      const proximityOpacity = Math.max(0.5, Math.min(1, 1 - dist / 150));
      const finalOpacity = particle.opacity * proximityOpacity;

      const glowSize = particle.size * 5 * particle.depth;
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, glowSize
      );
      gradient.addColorStop(0, `rgba(255, 225, 150, ${finalOpacity * 0.9})`);
      gradient.addColorStop(0.3, `rgba(255, 195, 110, ${finalOpacity * 0.6})`);
      gradient.addColorStop(0.6, `rgba(255, 165, 80, ${finalOpacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(255, 200, 100, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255, 245, 220, ${finalOpacity})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 1.3, 0, Math.PI * 2);
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

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    particlesRef.current = createParticles(1800);
    assignTargets(particlesRef.current, 'finx');

    animationFrameRef.current = requestAnimationFrame(animate);

    const shapes: ShapeType[] = ['finx', 'starburst', 'network', 'spiral', 'constellation'];
    let shapeIndex = 0;

    const shapeInterval = setInterval(() => {
      shapeIndex = (shapeIndex + 1) % shapes.length;
      currentShapeRef.current = shapes[shapeIndex];
      assignTargets(particlesRef.current, shapes[shapeIndex]);
    }, 9000);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
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
      style={{ background: 'linear-gradient(135deg, hsl(var(--cosmic-dark)) 0%, hsl(160 35% 6%) 50%, hsl(var(--cosmic-bg)) 100%)' }}
    />
  );
};
