import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
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
      <Canvas camera={{ position: [0, 1.2, 5], fov: 38 }}>
        <ambientLight intensity={1.6} />
        <directionalLight position={[4, 5, 4]} intensity={2.3} />
        <directionalLight position={[-4, 2, -3]} intensity={0.8} />

        <Suspense fallback={null}>
          <Model path={path} scale={scale} position={position} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={3}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}