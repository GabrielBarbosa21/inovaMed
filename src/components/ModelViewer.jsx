import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Preload,
} from "@react-three/drei";

import { Suspense } from "react";

function Model({ path, scale = 1.6, position = [0, -1, 0] }) {
  const { scene } = useGLTF(path);

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={[0, -0.3, 0]}
    />
  );
}

export default function ModelViewer({ path, scale, position }) {
  return (
    <div className="modelViewer">
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [0, 1.2, 5],
          fov: 38,
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
          <Model
            path={path}
            scale={scale}
            position={position}
          />

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
          minDistance={3}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}