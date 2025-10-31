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

type ShapeType = 'sphere' | 'spiral' | 'wave' | 'galaxy' | 'constellation' | 'dollar';

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
    const mouseRef = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const cameraRotation = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const getShapePoints = (shape: ShapeType, radius: number): [number, number, number][] => {
      const points: [number, number, number][] = [];
      
      switch (shape) {
        case 'sphere':
          // 3D сфера в космосе
          for (let i = 0; i < 2500; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = Math.pow(Math.random(), 0.6) * radius;
            
            points.push([
              r * Math.sin(phi) * Math.cos(theta),
              r * Math.sin(phi) * Math.sin(theta),
              r * Math.cos(phi)
            ]);
          }
          break;

        case 'spiral':
          // 3D спиральная галактика
          const arms = 3;
          for (let arm = 0; arm < arms; arm++) {
            const armAngle = (arm / arms) * Math.PI * 2;
            for (let i = 0; i < 850; i++) {
              const t = i / 850;
              const spiralAngle = t * Math.PI * 4;
              const r = t * radius * 1.2;
              const angle = armAngle + spiralAngle;
              const spread = (Math.random() - 0.5) * 30;
              const height = (Math.random() - 0.5) * 100 * t;
              
              points.push([
                Math.cos(angle) * r + spread,
                Math.sin(angle) * r + spread,
                height
              ]);
            }
          }
          break;

        case 'wave':
          // 3D волновой паттерн
          for (let x = 0; x < 100; x++) {
            for (let y = 0; y < 25; y++) {
              const xPos = -radius + (x / 100) * radius * 2;
              const yPos = -radius * 0.6 + (y / 25) * radius * 1.2;
              const wave1 = Math.sin(x * 0.3) * 100;
              const wave2 = Math.cos(x * 0.2 + y * 0.3) * 80;
              
              points.push([xPos, yPos + wave1, wave2]);
            }
          }
          break;

        case 'galaxy':
          // 3D галактическое кольцо
          const rings = 5;
          for (let ring = 0; ring < rings; ring++) {
            const ringRadius = (radius * 0.3) + (ring / rings) * radius * 0.7;
            const pointsInRing = 300 + ring * 100;
            for (let i = 0; i < pointsInRing; i++) {
              const angle = (i / pointsInRing) * Math.PI * 2;
              const r = ringRadius + (Math.random() - 0.5) * 40;
              const height = (Math.random() - 0.5) * 60;
              
              points.push([
                Math.cos(angle) * r,
                Math.sin(angle) * r,
                height
              ]);
            }
          }
          break;

        case 'constellation':
          // 3D созвездие
          const nodes = 8;
          const nodePositions: [number, number, number][] = [];
          
          for (let i = 0; i < nodes; i++) {
            const angle = (i / nodes) * Math.PI * 2;
            const r = radius * 0.7;
            const nodeX = Math.cos(angle) * r;
            const nodeY = Math.sin(angle) * r;
            const nodeZ = (Math.random() - 0.5) * 200;
            nodePositions.push([nodeX, nodeY, nodeZ]);
            
            for (let j = 0; j < 200; j++) {
              const clusterAngle = Math.random() * Math.PI * 2;
              const clusterPhi = Math.random() * Math.PI;
              const clusterR = Math.random() * 60;
              
              points.push([
                nodeX + Math.sin(clusterPhi) * Math.cos(clusterAngle) * clusterR,
                nodeY + Math.sin(clusterPhi) * Math.sin(clusterAngle) * clusterR,
                nodeZ + Math.cos(clusterPhi) * clusterR
              ]);
            }
          }
          
          for (let i = 0; i < nodePositions.length; i++) {
            const next = (i + 1) % nodePositions.length;
            const [x1, y1, z1] = nodePositions[i];
            const [x2, y2, z2] = nodePositions[next];
            
            for (let t = 0; t < 50; t++) {
              const progress = t / 50;
              points.push([
                x1 + (x2 - x1) * progress,
                y1 + (y2 - y1) * progress,
                z1 + (z2 - z1) * progress
              ]);
            }
          }
          break;

        case 'dollar':
          // Правильный знак доллара $ с двумя вертикальными линиями и S
          const dollarRadius = radius * 0.65;
          const lineThickness = 20;
          const lineOffset = dollarRadius * 0.12; // расстояние между двумя линиями
          
          // Первая вертикальная линия (левая)
          for (let layer = 0; layer < 10; layer++) {
            const layerRadius = (layer / 10) * lineThickness;
            for (let i = 0; i < 100; i++) {
              const t = i / 100;
              const y = -dollarRadius * 1.35 + t * dollarRadius * 2.7;
              const angle = (layer / 10) * Math.PI * 2;
              const xOffset = -lineOffset + Math.cos(angle) * layerRadius;
              const zOffset = Math.sin(angle) * layerRadius;
              points.push([xOffset, y, zOffset]);
            }
          }
          
          // Вторая вертикальная линия (правая)
          for (let layer = 0; layer < 10; layer++) {
            const layerRadius = (layer / 10) * lineThickness;
            for (let i = 0; i < 100; i++) {
              const t = i / 100;
              const y = -dollarRadius * 1.35 + t * dollarRadius * 2.7;
              const angle = (layer / 10) * Math.PI * 2;
              const xOffset = lineOffset + Math.cos(angle) * layerRadius;
              const zOffset = Math.sin(angle) * layerRadius;
              points.push([xOffset, y, zOffset]);
            }
          }
          
          // Верхняя часть S (верхний полукруг, справа)
          for (let layer = 0; layer < 8; layer++) {
            const layerOffset = (layer / 8) * lineThickness;
            for (let i = 0; i < 120; i++) {
              const t = i / 120;
              // Верхний полукруг от верхнего правого к верхнему левому
              const angle = -Math.PI * 0.5 + t * Math.PI;
              const sRadius = dollarRadius * 0.6;
              const curveX = Math.cos(angle) * sRadius;
              const curveY = dollarRadius * 0.4;
              
              const layerAngle = (layer / 8) * Math.PI * 2;
              const xLayerOffset = Math.cos(layerAngle) * layerOffset;
              const zLayerOffset = Math.sin(layerAngle) * layerOffset;
              
              points.push([curveX + xLayerOffset, curveY, zLayerOffset]);
            }
          }
          
          // Средняя часть S (соединение)
          for (let layer = 0; layer < 6; layer++) {
            const layerOffset = (layer / 6) * lineThickness;
            for (let i = 0; i < 60; i++) {
              const t = i / 60;
              const curveX = dollarRadius * 0.6 - t * dollarRadius * 1.2;
              const curveY = dollarRadius * 0.2 - t * dollarRadius * 0.4;
              
              const layerAngle = (layer / 6) * Math.PI * 2;
              const xLayerOffset = Math.cos(layerAngle) * layerOffset;
              const zLayerOffset = Math.sin(layerAngle) * layerOffset;
              
              points.push([curveX + xLayerOffset, curveY, zLayerOffset]);
            }
          }
          
          // Нижняя часть S (нижний полукруг, слева)
          for (let layer = 0; layer < 8; layer++) {
            const layerOffset = (layer / 8) * lineThickness;
            for (let i = 0; i < 120; i++) {
              const t = i / 120;
              // Нижний полукруг от нижнего левого к нижнему правому
              const angle = Math.PI * 0.5 + t * Math.PI;
              const sRadius = dollarRadius * 0.6;
              const curveX = Math.cos(angle) * sRadius;
              const curveY = -dollarRadius * 0.4;
              
              const layerAngle = (layer / 8) * Math.PI * 2;
              const xLayerOffset = Math.cos(layerAngle) * layerOffset;
              const zLayerOffset = Math.sin(layerAngle) * layerOffset;
              
              points.push([curveX + xLayerOffset, curveY, zLayerOffset]);
            }
          }
          
          // Дополнительные частицы для плотности
          for (let i = 0; i < 1200; i++) {
            const section = Math.random();
            
            if (section < 0.25) {
              // Левая вертикальная линия
              const t = Math.random();
              const y = -dollarRadius * 1.35 + t * dollarRadius * 2.7;
              const randAngle = Math.random() * Math.PI * 2;
              const randRadius = Math.random() * lineThickness;
              points.push([
                -lineOffset + Math.cos(randAngle) * randRadius,
                y,
                Math.sin(randAngle) * randRadius
              ]);
            } else if (section < 0.5) {
              // Правая вертикальная линия
              const t = Math.random();
              const y = -dollarRadius * 1.35 + t * dollarRadius * 2.7;
              const randAngle = Math.random() * Math.PI * 2;
              const randRadius = Math.random() * lineThickness;
              points.push([
                lineOffset + Math.cos(randAngle) * randRadius,
                y,
                Math.sin(randAngle) * randRadius
              ]);
            } else if (section < 0.7) {
              // Верхний полукруг S
              const t = Math.random();
              const angle = -Math.PI * 0.5 + t * Math.PI;
              const sRadius = dollarRadius * 0.6;
              const randAngle = Math.random() * Math.PI * 2;
              const randRadius = Math.random() * lineThickness;
              points.push([
                Math.cos(angle) * sRadius + Math.cos(randAngle) * randRadius,
                dollarRadius * 0.4,
                Math.sin(randAngle) * randRadius
              ]);
            } else if (section < 0.85) {
              // Нижний полукруг S
              const t = Math.random();
              const angle = Math.PI * 0.5 + t * Math.PI;
              const sRadius = dollarRadius * 0.6;
              const randAngle = Math.random() * Math.PI * 2;
              const randRadius = Math.random() * lineThickness;
              points.push([
                Math.cos(angle) * sRadius + Math.cos(randAngle) * randRadius,
                -dollarRadius * 0.4,
                Math.sin(randAngle) * randRadius
              ]);
            } else {
              // Средняя часть
              const t = Math.random();
              const curveX = dollarRadius * 0.6 - t * dollarRadius * 1.2;
              const curveY = dollarRadius * 0.2 - t * dollarRadius * 0.4;
              const randAngle = Math.random() * Math.PI * 2;
              const randRadius = Math.random() * lineThickness;
              points.push([
                curveX + Math.cos(randAngle) * randRadius,
                curveY,
                Math.sin(randAngle) * randRadius
              ]);
            }
          }
          break;
      }
      
      return points;
    };

    const initParticles = () => {
      particles = [];
      const radius = Math.min(canvas.width, canvas.height) * 0.4;
      
      const points = getShapePoints('dollar', radius);

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
      const radius = Math.min(canvas.width, canvas.height) * 0.4;
      const points = getShapePoints(shape, radius);
      
      particles.forEach((particle, i) => {
        const point = points[i % points.length];
        particle.targetX = point[0];
        particle.targetY = point[1];
        particle.targetZ = point[2];
      });
    };

    const rotate3D = (x: number, y: number, z: number, rotX: number, rotY: number): [number, number, number] => {
      // Вращение вокруг оси Y
      let newX = x * Math.cos(rotY) - z * Math.sin(rotY);
      let newZ = x * Math.sin(rotY) + z * Math.cos(rotY);
      
      // Вращение вокруг оси X
      const finalY = y * Math.cos(rotX) - newZ * Math.sin(rotX);
      const finalZ = y * Math.sin(rotX) + newZ * Math.cos(rotX);
      
      return [newX, finalY, finalZ];
    };

    const project3D = (x: number, y: number, z: number): [number, number, number] => {
      const fov = 800;
      const scale = fov / (fov + z);
      
      return [
        canvas.width / 2 + x * scale,
        canvas.height / 2 + y * scale,
        scale
      ];
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Космический градиентный фон
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      bgGradient.addColorStop(0, 'rgba(5, 25, 25, 0.98)');
      bgGradient.addColorStop(0.5, 'rgba(0, 15, 20, 0.98)');
      bgGradient.addColorStop(1, 'rgba(0, 5, 10, 0.98)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Плавное вращение камеры
      cameraRotation.targetX = ((mouseRef.targetY / canvas.height) - 0.5) * Math.PI * 0.3;
      cameraRotation.targetY = ((mouseRef.targetX / canvas.width) - 0.5) * Math.PI * 0.5;
      
      cameraRotation.x += (cameraRotation.targetX - cameraRotation.x) * 0.05;
      cameraRotation.y += (cameraRotation.targetY - cameraRotation.y) * 0.05;

      const time = Date.now() * 0.001;

      // Сортировка по глубине для правильного рендеринга
      const sortedParticles = [...particles].sort((a, b) => {
        const [,,zA] = rotate3D(a.x, a.y, a.z, cameraRotation.x, cameraRotation.y);
        const [,,zB] = rotate3D(b.x, b.y, b.z, cameraRotation.x, cameraRotation.y);
        return zB - zA;
      });

      sortedParticles.forEach((particle) => {
        // Плавное органическое движение
        const floatX = Math.sin(time * particle.speed + particle.phase) * 10;
        const floatY = Math.cos(time * particle.speed + particle.phase * 1.3) * 10;
        const floatZ = Math.sin(time * particle.speed * 0.7 + particle.phase * 0.8) * 15;

        const finalTargetX = particle.targetX + floatX;
        const finalTargetY = particle.targetY + floatY;
        const finalTargetZ = particle.targetZ + floatZ;

        const dx = finalTargetX - particle.x;
        const dy = finalTargetY - particle.y;
        const dz = finalTargetZ - particle.z;

        particle.vx += dx * 0.002;
        particle.vy += dy * 0.002;
        particle.vz += dz * 0.002;

        particle.vx *= 0.92;
        particle.vy *= 0.92;
        particle.vz *= 0.92;

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        particle.baseX += (particle.targetX - particle.baseX) * 0.01;
        particle.baseY += (particle.targetY - particle.baseY) * 0.01;
        particle.baseZ += (particle.targetZ - particle.baseZ) * 0.01;

        // Применяем 3D вращение и проекцию
        const [rotatedX, rotatedY, rotatedZ] = rotate3D(
          particle.x, 
          particle.y, 
          particle.z, 
          cameraRotation.x, 
          cameraRotation.y
        );
        
        const [screenX, screenY, scale] = project3D(rotatedX, rotatedY, rotatedZ);

        // Пропускаем частицы за камерой
        if (rotatedZ < -800) return;

        // Расчет яркости на основе Z-координаты
        const zDepth = (rotatedZ + 800) / 1600;
        const depthFactor = Math.max(0.2, Math.min(1, 1 - zDepth * 0.5));
        const brightness = 40 + depthFactor * 40;
        
        const particleSize = particle.size * scale * depthFactor;
        
        // Золотисто-оранжевый градиент
        const gradient = ctx.createRadialGradient(
          screenX, screenY, 0,
          screenX, screenY, particleSize * 4
        );
        
        const alpha = particle.opacity * depthFactor * 0.8;
        const saturation = 70 + depthFactor * 30;
        
        gradient.addColorStop(0, `hsla(${particle.hue}, ${saturation}%, ${brightness}%, ${alpha})`);
        gradient.addColorStop(0.4, `hsla(${particle.hue}, ${saturation}%, ${brightness * 0.7}%, ${alpha * 0.6})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, ${saturation}%, ${brightness * 0.5}%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(screenX, screenY, particleSize * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.targetX = e.clientX;
      mouseRef.targetY = e.clientY;
    };

    const handleResize = () => {
      resizeCanvas();
      const radius = Math.min(canvas.width, canvas.height) * 0.4;
      const points = getShapePoints(currentShape, radius);
      particles.forEach((particle, i) => {
        const point = points[i % points.length];
        particle.targetX = point[0];
        particle.targetY = point[1];
        particle.targetZ = point[2];
      });
    };

    resizeCanvas();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    initParticles();
    animate();

    // Цикл смены форм
    const shapes: ShapeType[] = ['dollar', 'sphere', 'spiral', 'wave', 'galaxy', 'constellation'];
    let shapeIndex = 0;

    const shapeInterval = setInterval(() => {
      shapeIndex = (shapeIndex + 1) % shapes.length;
      currentShape = shapes[shapeIndex];
      morphToShape(currentShape);
    }, 8000);

    return () => {
      window.removeEventListener('resize', handleResize);
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