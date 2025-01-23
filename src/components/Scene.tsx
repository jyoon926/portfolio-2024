import * as THREE from 'three';
import { Environment, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { BallCollider, CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { useMemo, useRef } from 'react';

const connectors = [
  // { color: 'white', roughness: 0, metalness: 0.7, count: 10 },
  { color: 'white', roughness: 0.6, metalness: 0, count: 5 },
  { color: 'white', roughness: 0.05, metalness: 0.2, count: 5 },
  { color: '#888', roughness: 0.05, metalness: 0, count: 5 },
  { color: '#888', roughness: 0.8, metalness: 1, count: 5 },
];

type ConnectorProps = {
  position?: THREE.Vector3;
  children?: React.ReactNode;
  vec?: THREE.Vector3;
  scale?: number;
  r?: (spread: number) => number;
  color?: string;
  [key: string]: any;
};

type ModelProps = {
  children?: React.ReactNode;
  color?: string;
  roughness?: number;
  metalness?: number;
  [key: string]: any;
};

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 40 }} gl={{ antialias: true }}>
      <spotLight position={[20, 10, 10]} angle={0.2} penumbra={1} intensity={1500} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <Environment resolution={1024} preset='studio' environmentIntensity={0.04} blur={0.4} />
      <Physics gravity={[12, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) =>
          Array.from({ length: props.count }, (_, j) => (
            <Connector key={`${i}, ${j}`} {...props} />
          ))
        )}
      </Physics>
    </Canvas >
  )
}

function Pointer({ vec = new THREE.Vector3() }: { vec?: THREE.Vector3 }) {
  const ref = useRef<any>(null);

  useFrame(({ mouse, viewport }) => {
    if (ref.current) {
      ref.current.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0));
    }
  });

  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

function Connector({ position, children, vec = new THREE.Vector3(), r = THREE.MathUtils.randFloatSpread, ...props }: ConnectorProps) {
  const api = useRef<any>(null);
  const pos = useMemo(() => position || new THREE.Vector3(r(10), r(10), r(10)), [position, r]);

  useFrame((_, delta) => {
    delta = Math.min(0.1, delta);
    if (api.current) {
      api.current.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.2));
    }
  });

  return (
    <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <Model {...props} />}
    </RigidBody>
  );
}

function Model({ children, color = "white", roughness = 0.1, metalness = 0 }: ModelProps) {
  const { nodes, materials } = useGLTF('/models/c-transformed.glb') as any;

  return (
    <mesh castShadow receiveShadow scale={10} geometry={nodes.connector.geometry}>
      <meshStandardMaterial metalness={metalness} roughness={roughness} map={materials.base.map} color={color} />
      {children}
    </mesh>
  )
}
