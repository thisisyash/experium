import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

export default function BubbleScene() {
  const numBubbles = 200; // Optimized for performance

  // Store bubbles in useMemo to prevent re-renders
  const bubbles = useMemo(
    () =>
      Array.from({ length: numBubbles }, (_, i) => ({
        id: i,
        position: [
          (Math.random() - 0.5) * 6, // Spread on X-axis
          (Math.random() - 0.6) * 20, // Spread on Y-axis
          (Math.random() - 0.5) * 2, // Closer to camera (Z-axis)
        ],
        scale: Math.random() * 0.08 + 0.02, // Random sizes
        floatSpeed: Math.random() * 0.05 + 0.02, // Slower floating
        floatIntensity: Math.random() * 0.8 + 0.4, // Less CPU intensive
        moveSpeed: Math.random() * 0.005 + 0.001, // Random movement speed
      })),
    []
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "500vh",
        zIndex: -1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5] }} // Closer camera position
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: false,
        }}
      >
        {/* Background Color */}
        <color attach="background" args={["#F5EFFF"]} />

        {/* Floating Bubbles with Random Motion */}
        {bubbles.map((bubble) => (
          <Float
            key={bubble.id}
            floatIntensity={bubble.floatIntensity}
            speed={bubble.floatSpeed}
          >
            <Bubble
              scale={bubble.scale}
              position={bubble.position}
              moveSpeed={bubble.moveSpeed} // Custom speed for each bubble
            />
          </Float>
        ))}

        {/* Environment Light */}
        <Environment preset="studio" blur={1} />
      </Canvas>
    </div>
  );
}

// Bubble Component with **Random Floating Animation**
function Bubble({ moveSpeed, ...props }) {
  const meshRef = useRef();
  const randomFactor = useMemo(() => Math.random() * 2, []); // Each bubble gets a unique movement pattern

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Make the bubbles float **randomly in all directions**
      const time = clock.getElapsedTime();
      meshRef.current.position.y += Math.sin(time * moveSpeed + randomFactor) * 0.003; // Up-Down
      meshRef.current.position.x += Math.cos(time * moveSpeed + randomFactor) * 0.002; // Left-Right
      meshRef.current.position.z += Math.sin(time * moveSpeed * 0.8 + randomFactor) * 0.002; // Forward-Backward
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <sphereGeometry args={[1, 32, 32]} /> {/* Optimized geometry */}
      <MeshDistortMaterial
        distort={0.05} // Less distortion for realism
        transmission={1.02}
        thickness={-0.3}
        roughness={0}
        iridescence={0.8}
        iridescenceIOR={1}
        iridescenceThicknessRange={[0, 600]} // Optimization
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={0.8} // Performance boost
        toneMapped={false}
      />
    </mesh>
  );
}
