import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Environment } from "@react-three/drei";

const WaterBubbles = React.memo(() => {
  const groupRef = useRef();

  const bubbles = useMemo(() => {
    return new Array(200).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
      ],
      scale: Math.random() * 0.03 + 0.01, // Smaller range
      speed: Math.random() * 0.5 + 0.05, // Slower movement
      color: `hsl(${Math.random() * 50 + 190}, 80%, 70%)`, // Bluish gradient shades
    }));
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * 0.01;
      groupRef.current.rotation.x = elapsed * 0.005;

      groupRef.current.children.forEach((bubble, i) => {
        if (i % 2 === 0) {
          bubble.position.y += Math.sin(elapsed * bubbles[i].speed) * 0.0005;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {bubbles.map((bubble, i) => (
        <Sphere key={i} args={[1, 32, 32]} scale={bubble.scale} position={bubble.position}>
        <meshPhysicalMaterial
          transmission={0.25}
          ior={1.1}
          opacity={0.8}
          clearcoat={0.8}
          roughness={0}
          metalness={0.1}
          thickness={0.02}
          color={bubble.color}
          emissive={bubble.color}
          emissiveIntensity={0.2}
          envMapIntensity={1.2}
        />
      </Sphere>
      ))}
    </group>
  );
});

const Background3D = ({ bgColor = "#F5EFFF" }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "700vh",
        zIndex: -1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 7] }}
        gl={{ antialias: false, powerPreference: "low-power", alpha: false }}
      >
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <WaterBubbles />
      </Canvas>
    </div>
  );
};

export default Background3D;
