import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Preload,
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
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [0, 1.1, 6],
          fov: 35,
        }}
      >
        <ambientLight intensity={1.4} />

        <directionalLight
          position={[4, 5, 4]}
          intensity={2}
        />

        <directionalLight
          position={[-4, 2, -3]}
          intensity={0.7}
        />

        <Suspense fallback={null}>
          <Model />

          <Environment
            preset="city"
            resolution={128}
          />

          <Preload all />
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