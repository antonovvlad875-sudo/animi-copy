import { useEffect, useRef } from 'react';

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
  depth: number;
  phase: number;
  speed: number;
  hue: number;
}

type ShapeType = 'sphere' | 'spiral' | 'wave' | 'galaxy' | 'constellation';

export const ConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let currentShape: ShapeType = 'sphere';
    const mouseRef = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const getShapePoints = (shape: ShapeType, centerX: number, centerY: number, radius: number): [number, number][] => {
      const points: [number, number][] = [];
      
      switch (shape) {
        case 'sphere':
          // Сферическое облако
          for (let i = 0; i < 2500; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.pow(Math.random(), 0.6) * radius;
            points.push([
              centerX + Math.cos(angle) * distance,
              centerY + Math.sin(angle) * distance
            ]);
          }
          break;

        case 'spiral':
          // Спиральная галактика
          const arms = 3;
          for (let arm = 0; arm < arms; arm++) {
            const armAngle = (arm / arms) * Math.PI * 2;
            for (let i = 0; i < 850; i++) {
              const t = i / 850;
              const spiralAngle = t * Math.PI * 4;
              const r = t * radius * 1.2;
              const angle = armAngle + spiralAngle;
              const spread = (Math.random() - 0.5) * 30;
              points.push([
                centerX + Math.cos(angle) * r + spread,
                centerY + Math.sin(angle) * r + spread
              ]);
            }
          }
          break;

        case 'wave':
          // Волновой паттерн
          for (let x = 0; x < 100; x++) {
            for (let y = 0; y < 25; y++) {
              const xPos = centerX - radius + (x / 100) * radius * 2;
              const wave1 = Math.sin(x * 0.3) * 100;
              const wave2 = Math.cos(x * 0.2 + y * 0.3) * 80;
              const yPos = centerY - radius * 0.6 + (y / 25) * radius * 1.2 + wave1 + wave2;
              points.push([xPos, yPos]);
            }
          }
          break;

        case 'galaxy':
          // Галактическое кольцо
          const rings = 5;
          for (let ring = 0; ring < rings; ring++) {
            const ringRadius = (radius * 0.3) + (ring / rings) * radius * 0.7;
            const pointsInRing = 300 + ring * 100;
            for (let i = 0; i < pointsInRing; i++) {
              const angle = (i / pointsInRing) * Math.PI * 2;
              const r = ringRadius + (Math.random() - 0.5) * 40;
              points.push([
                centerX + Math.cos(angle) * r,
                centerY + Math.sin(angle) * r
              ]);
            }
          }
          break;

        case 'constellation':
          // Созвездие с узлами
          const nodes = 8;
          const nodePositions: [number, number][] = [];
          
          for (let i = 0; i < nodes; i++) {
            const angle = (i / nodes) * Math.PI * 2;
            const r = radius * 0.7;
            const nodeX = centerX + Math.cos(angle) * r;
            const nodeY = centerY + Math.sin(angle) * r;
            nodePositions.push([nodeX, nodeY]);
            
            // Кластеры вокруг узлов
            for (let j = 0; j < 200; j++) {
              const clusterAngle = Math.random() * Math.PI * 2;
              const clusterR = Math.random() * 60;
              points.push([
                nodeX + Math.cos(clusterAngle) * clusterR,
                nodeY + Math.sin(clusterAngle) * clusterR
              ]);
            }
          }
          
          // Соединительные линии
          for (let i = 0; i < nodePositions.length; i++) {
            const next = (i + 1) % nodePositions.length;
            const [x1, y1] = nodePositions[i];
            const [x2, y2] = nodePositions[next];
            
            for (let t = 0; t < 50; t++) {
              const progress = t / 50;
              points.push([
                x1 + (x2 - x1) * progress,
                y1 + (y2 - y1) * progress
              ]);
            }
          }
          break;
      }
      
      return points;
    };

    const initParticles = () => {
      particles = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;
      
      const points = getShapePoints('sphere', centerX, centerY, radius);

      for (let i = 0; i < 2500; i++) {
        const point = points[i % points.length];
        
        particles.push({
          x: point[0],
          y: point[1],
          baseX: point[0],
          baseY: point[1],
          targetX: point[0],
          targetY: point[1],
          vx: 0,
          vy: 0,
          size: Math.random() * 2 + 0.8,
          opacity: Math.random() * 0.6 + 0.4,
          depth: Math.random(),
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.4 + 0.2,
          hue: 25 + Math.random() * 20
        });
      }
    };

    const morphToShape = (shape: ShapeType) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;
      
      const points = getShapePoints(shape, centerX, centerY, radius);
      
      particles.forEach((particle, i) => {
        const point = points[i % points.length];
        particle.targetX = point[0];
        particle.targetY = point[1];
      });
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Темно-зеленый градиентный фон
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
        const floatX = Math.sin(time * particle.speed + particle.phase) * 15;
        const floatY = Math.cos(time * particle.speed + particle.phase * 1.3) * 15;

        // Параллакс эффект
        const parallaxX = (mouseRef.x - canvas.width / 2) * particle.depth * 0.08;
        const parallaxY = (mouseRef.y - canvas.height / 2) * particle.depth * 0.08;

        const finalTargetX = particle.targetX + floatX + parallaxX;
        const finalTargetY = particle.targetY + floatY + parallaxY;

        const dx = finalTargetX - particle.x;
        const dy = finalTargetY - particle.y;

        // Более сильное притяжение для четких форм
        particle.vx += dx * 0.002;
        particle.vy += dy * 0.002;

        particle.vx *= 0.92;
        particle.vy *= 0.92;

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Обновляем baseX/baseY для плавности
        particle.baseX += (particle.targetX - particle.baseX) * 0.01;
        particle.baseY += (particle.targetY - particle.baseY) * 0.01;

        // Расчет яркости
        const centerDist = Math.sqrt(
          Math.pow(particle.x - canvas.width / 2, 2) + 
          Math.pow(particle.y - canvas.height / 2, 2)
        );
        const maxDist = Math.min(canvas.width, canvas.height) * 0.45;
        const distanceFactor = Math.max(0, 1 - (centerDist / maxDist));
        const brightness = 50 + distanceFactor * 30;

        // Золотисто-оранжевый градиент
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

    initParticles();
    animate();

    // Цикл смены форм
    const shapes: ShapeType[] = ['sphere', 'spiral', 'wave', 'galaxy', 'constellation'];
    let shapeIndex = 0;

    const shapeInterval = setInterval(() => {
      shapeIndex = (shapeIndex + 1) % shapes.length;
      currentShape = shapes[shapeIndex];
      morphToShape(currentShape);
    }, 8000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearInterval(shapeInterval);
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