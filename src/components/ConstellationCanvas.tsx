import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  targetX: number;
  targetY: number;
  targetZ: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
  depth: number;
  phase: number;
  speed: number;
  hue: number;
}

type ShapeType = 'dollar' | 'euro' | 'sphere' | 'spiral' | 'galaxy';

export const ConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let currentShape: ShapeType = 'dollar';
    const mouseRef = { 
      x: window.innerWidth / 2, 
      y: window.innerHeight / 2, 
      targetX: window.innerWidth / 2, 
      targetY: window.innerHeight / 2,
      velocityX: 0,
      velocityY: 0
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const getDollarPoints = (centerX: number, centerY: number, scale: number): [number, number, number][] => {
      const points: [number, number, number][] = [];
      const density = 2;
      const height = scale * 2;
      const strokeWidth = scale * 0.12;
      
      // Вертикальная линия через S
      for (let y = -height * 0.6; y < height * 0.6; y += density) {
        for (let x = -strokeWidth / 2; x < strokeWidth / 2; x += density) {
          const z = Math.random() * 20 - 10;
          points.push([centerX + x, centerY + y, z]);
        }
      }
      
      // Верхняя кривая S
      for (let i = 0; i < 60; i++) {
        const t = i / 60;
        const angle = Math.PI + t * Math.PI;
        const radius = scale * 0.45;
        const x = Math.cos(angle) * radius;
        const y = -height * 0.25 + Math.sin(angle) * radius;
        
        for (let w = 0; w < strokeWidth; w += density) {
          const offsetAngle = angle + Math.PI / 2;
          const z = Math.random() * 20 - 10;
          points.push([
            centerX + x + Math.cos(offsetAngle) * w,
            centerY + y + Math.sin(offsetAngle) * w,
            z
          ]);
        }
      }
      
      // Нижняя кривая S
      for (let i = 0; i < 60; i++) {
        const t = i / 60;
        const angle = t * Math.PI;
        const radius = scale * 0.45;
        const x = Math.cos(angle) * radius;
        const y = height * 0.25 + Math.sin(angle) * radius;
        
        for (let w = 0; w < strokeWidth; w += density) {
          const offsetAngle = angle + Math.PI / 2;
          const z = Math.random() * 20 - 10;
          points.push([
            centerX + x + Math.cos(offsetAngle) * w,
            centerY + y + Math.sin(offsetAngle) * w,
            z
          ]);
        }
      }
      
      return points;
    };

    const getEuroPoints = (centerX: number, centerY: number, scale: number): [number, number, number][] => {
      const points: [number, number, number][] = [];
      const density = 2;
      const strokeWidth = scale * 0.12;
      
      // Основная дуга €
      for (let i = 30; i < 330; i++) {
        const angle = (i / 180) * Math.PI;
        const radius = scale * 0.6;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        for (let w = 0; w < strokeWidth; w += density) {
          const offsetAngle = angle + Math.PI / 2;
          const z = Math.random() * 20 - 10;
          points.push([
            x + Math.cos(offsetAngle) * w,
            y + Math.sin(offsetAngle) * w,
            z
          ]);
        }
      }
      
      // Верхняя горизонтальная линия
      for (let x = -scale * 0.7; x < 0; x += density) {
        for (let y = 0; y < strokeWidth; y += density) {
          const z = Math.random() * 20 - 10;
          points.push([centerX + x, centerY - scale * 0.2 + y, z]);
        }
      }
      
      // Нижняя горизонтальная линия
      for (let x = -scale * 0.7; x < 0; x += density) {
        for (let y = 0; y < strokeWidth; y += density) {
          const z = Math.random() * 20 - 10;
          points.push([centerX + x, centerY + scale * 0.2 + y, z]);
        }
      }
      
      return points;
    };

    const getSpherePoints = (centerX: number, centerY: number, radius: number): [number, number, number][] => {
      const points: [number, number, number][] = [];
      
      for (let i = 0; i < 2500; i++) {
        // 3D сфера
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = Math.pow(Math.random(), 0.6) * radius;
        
        const x = centerX + r * Math.sin(phi) * Math.cos(theta);
        const y = centerY + r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        
        points.push([x, y, z]);
      }
      
      return points;
    };

    const getSpiralPoints = (centerX: number, centerY: number, radius: number): [number, number, number][] => {
      const points: [number, number, number][] = [];
      const arms = 3;
      
      for (let arm = 0; arm < arms; arm++) {
        const armAngle = (arm / arms) * Math.PI * 2;
        for (let i = 0; i < 850; i++) {
          const t = i / 850;
          const spiralAngle = t * Math.PI * 4;
          const r = t * radius * 1.2;
          const angle = armAngle + spiralAngle;
          const spread = (Math.random() - 0.5) * 30;
          const z = Math.sin(spiralAngle * 2) * 50;
          
          points.push([
            centerX + Math.cos(angle) * r + spread,
            centerY + Math.sin(angle) * r + spread,
            z
          ]);
        }
      }
      
      return points;
    };

    const getGalaxyPoints = (centerX: number, centerY: number, radius: number): [number, number, number][] => {
      const points: [number, number, number][] = [];
      const rings = 5;
      
      for (let ring = 0; ring < rings; ring++) {
        const ringRadius = (radius * 0.3) + (ring / rings) * radius * 0.7;
        const pointsInRing = 300 + ring * 100;
        for (let i = 0; i < pointsInRing; i++) {
          const angle = (i / pointsInRing) * Math.PI * 2;
          const r = ringRadius + (Math.random() - 0.5) * 40;
          const z = (Math.random() - 0.5) * 100;
          
          points.push([
            centerX + Math.cos(angle) * r,
            centerY + Math.sin(angle) * r,
            z
          ]);
        }
      }
      
      return points;
    };

    const getShapePoints = (shape: ShapeType, centerX: number, centerY: number, radius: number): [number, number, number][] => {
      switch (shape) {
        case 'dollar':
          return getDollarPoints(centerX, centerY, radius);
        case 'euro':
          return getEuroPoints(centerX, centerY, radius);
        case 'sphere':
          return getSpherePoints(centerX, centerY, radius);
        case 'spiral':
          return getSpiralPoints(centerX, centerY, radius);
        case 'galaxy':
          return getGalaxyPoints(centerX, centerY, radius);
        default:
          return [];
      }
    };

    const initParticles = () => {
      particles = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.25;
      
      const points = getShapePoints('dollar', centerX, centerY, radius);

      for (let i = 0; i < 2500; i++) {
        const point = points[i % points.length];
        
        particles.push({
          x: point[0],
          y: point[1],
          z: point[2],
          baseX: point[0],
          baseY: point[1],
          baseZ: point[2],
          targetX: point[0],
          targetY: point[1],
          targetZ: point[2],
          vx: 0,
          vy: 0,
          vz: 0,
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
      const radius = Math.min(canvas.width, canvas.height) * 0.25;
      
      const points = getShapePoints(shape, centerX, centerY, radius);
      
      particles.forEach((particle, i) => {
        const point = points[i % points.length];
        particle.targetX = point[0];
        particle.targetY = point[1];
        particle.targetZ = point[2];
      });
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Космический градиентный фон с глубиной
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.7
      );
      bgGradient.addColorStop(0, 'rgba(5, 30, 35, 0.97)');
      bgGradient.addColorStop(0.5, 'rgba(0, 20, 25, 0.97)');
      bgGradient.addColorStop(1, 'rgba(0, 10, 15, 0.97)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Плавное движение мыши с инерцией
      const targetDeltaX = mouseRef.targetX - canvas.width / 2;
      const targetDeltaY = mouseRef.targetY - canvas.height / 2;
      
      mouseRef.velocityX += (targetDeltaX - mouseRef.x) * 0.002;
      mouseRef.velocityY += (targetDeltaY - mouseRef.y) * 0.002;
      
      mouseRef.velocityX *= 0.92;
      mouseRef.velocityY *= 0.92;
      
      mouseRef.x += mouseRef.velocityX;
      mouseRef.y += mouseRef.velocityY;

      const time = Date.now() * 0.001;

      // Сортировка по глубине для 3D эффекта
      const sortedParticles = [...particles].sort((a, b) => {
        const aZ = a.z + (mouseRef.x * 0.2);
        const bZ = b.z + (mouseRef.x * 0.2);
        return aZ - bZ;
      });

      sortedParticles.forEach((particle) => {
        // Органическое движение
        const floatX = Math.sin(time * particle.speed + particle.phase) * 12;
        const floatY = Math.cos(time * particle.speed + particle.phase * 1.3) * 12;
        const floatZ = Math.sin(time * particle.speed * 0.7 + particle.phase * 0.8) * 15;

        // Усиленный 3D параллакс
        const parallaxStrength = 0.15;
        const parallaxX = mouseRef.x * parallaxStrength * (1 + particle.z * 0.01);
        const parallaxY = mouseRef.y * parallaxStrength * (1 + particle.z * 0.01);

        const finalTargetX = particle.targetX + floatX + parallaxX;
        const finalTargetY = particle.targetY + floatY + parallaxY;
        const finalTargetZ = particle.targetZ + floatZ;

        const dx = finalTargetX - particle.x;
        const dy = finalTargetY - particle.y;
        const dz = finalTargetZ - particle.z;

        particle.vx += dx * 0.003;
        particle.vy += dy * 0.003;
        particle.vz += dz * 0.002;

        particle.vx *= 0.90;
        particle.vy *= 0.90;
        particle.vz *= 0.90;

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        particle.baseX += (particle.targetX - particle.baseX) * 0.01;
        particle.baseY += (particle.targetY - particle.baseY) * 0.01;
        particle.baseZ += (particle.targetZ - particle.baseZ) * 0.01;

        // 3D перспектива
        const perspective = 800;
        const scale3D = perspective / (perspective + particle.z);
        const screenX = particle.x * scale3D;
        const screenY = particle.y * scale3D;
        const screenSize = particle.size * scale3D;

        // Расчет яркости с учетом глубины
        const centerDist = Math.sqrt(
          Math.pow(particle.x - canvas.width / 2, 2) + 
          Math.pow(particle.y - canvas.height / 2, 2)
        );
        const maxDist = Math.min(canvas.width, canvas.height) * 0.5;
        const distanceFactor = Math.max(0, 1 - (centerDist / maxDist));
        
        // Глубина влияет на яркость
        const depthFactor = (particle.z + 100) / 200;
        const brightness = 45 + distanceFactor * 35 + depthFactor * 10;

        // Золотисто-оранжевый градиент с 3D глубиной
        const gradient = ctx.createRadialGradient(
          screenX, screenY, 0,
          screenX, screenY, screenSize * 5
        );
        
        const alpha = particle.opacity * (0.25 + distanceFactor * 0.75) * scale3D;
        const saturation = 65 + distanceFactor * 35;
        
        gradient.addColorStop(0, `hsla(${particle.hue}, ${saturation}%, ${brightness}%, ${alpha})`);
        gradient.addColorStop(0.3, `hsla(${particle.hue}, ${saturation}%, ${brightness * 0.75}%, ${alpha * 0.7})`);
        gradient.addColorStop(0.7, `hsla(${particle.hue}, ${saturation}%, ${brightness * 0.5}%, ${alpha * 0.3})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, ${saturation}%, ${brightness * 0.3}%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(screenX, screenY, screenSize * 4, 0, Math.PI * 2);
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

    // Цикл метаморфоз: $ → € → сфера → спираль → галактика
    const shapes: ShapeType[] = ['dollar', 'euro', 'sphere', 'spiral', 'galaxy'];
    let shapeIndex = 0;

    const shapeInterval = setInterval(() => {
      shapeIndex = (shapeIndex + 1) % shapes.length;
      currentShape = shapes[shapeIndex];
      morphToShape(currentShape);
    }, 7000);

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
        background: 'radial-gradient(ellipse at center, #001a1f 0%, #000f12 50%, #000508 100%)',
      }}
    />
  );
};