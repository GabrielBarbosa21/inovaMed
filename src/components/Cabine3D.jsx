import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/models/model-original.glb");

  return (
    <primitive
      object={scene}
      scale={1.45}
      position={[0, -0.35, 0]}
      rotation={[0, -0.25, 0]}
    />
  );
}

export default function Cabine3D() {
  return (
    <div className="cabine3dCanvas">
      <Canvas
        frameloop="demand"
        dpr={[1, 1.1]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [0, 1.1, 6],
          fov: 35,
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[4, 5, 4]} intensity={1.8} />
        <directionalLight position={[-4, 2, -3]} intensity={0.6} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate={false}
          minDistance={4}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/model-original.glb");