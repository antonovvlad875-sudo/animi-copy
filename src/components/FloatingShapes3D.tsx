import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

interface ShapeProps {
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  color: string;
  scale: number;
  rotationSpeed: [number, number, number];
  floatSpeed: number;
}

function FloatingShape({ position, geometry, color, scale, rotationSpeed, floatSpeed }: ShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      // Rotation
      meshRef.current.rotation.x += rotationSpeed[0];
      meshRef.current.rotation.y += rotationSpeed[1];
      meshRef.current.rotation.z += rotationSpeed[2];
      
      // Floating motion
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * floatSpeed) * 0.5;
      
      // Slow drift
      meshRef.current.position.x += Math.sin(state.clock.elapsedTime * 0.2) * 0.002;
      meshRef.current.position.z += Math.cos(state.clock.elapsedTime * 0.15) * 0.002;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
        wireframe={false}
      />
    </mesh>
  );
}

function Scene() {
  const shapes = useMemo(() => {
    const geometries = [
      new THREE.OctahedronGeometry(1),
      new THREE.TetrahedronGeometry(1),
      new THREE.IcosahedronGeometry(1),
      new THREE.DodecahedronGeometry(1),
      new THREE.TorusGeometry(0.8, 0.3, 16, 100),
      new THREE.TorusKnotGeometry(0.7, 0.3, 100, 16),
    ];

    const colors = ['#00ffff', '#7FFF00', '#32CD32', '#00ff88', '#88ffaa'];

    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
      geometry: geometries[Math.floor(Math.random() * geometries.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: 0.3 + Math.random() * 0.7,
      rotationSpeed: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
      ] as [number, number, number],
      floatSpeed: 0.5 + Math.random() * 1.5,
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7FFF00" />
      <pointLight position={[0, 0, 10]} intensity={0.6} color="#32CD32" />
      
      {shapes.map((shape) => (
        <FloatingShape key={shape.id} {...shape} />
      ))}
    </>
  );
}

export const FloatingShapes3D = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
