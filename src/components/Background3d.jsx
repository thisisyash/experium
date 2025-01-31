import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleField = ({ color = "#b89cb3" }) => {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(3000);
    for (let i = 0; i < 1000; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (pointsRef.current) {
        pointsRef.current.rotation.y = elapsed * 0.1;
    pointsRef.current.rotation.x = elapsed * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        attach="material"
        vertexColors={false} // Ensure it doesn't override the color
        color={new THREE.Color(color)} // Explicitly set the color
        size={0.06}
        sizeAttenuation
        depthWrite={false} // Prevents blending issues
      />
    </Points>
  );
};

const Background3D = ({ bgColor = "#F5EFFF", particleColor = "#b89cb3" }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "400vh",
        zIndex: -1,
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={0.5} />
        <ParticleField color={particleColor} />
      </Canvas>
    </div>
  );
};

export default Background3D;
