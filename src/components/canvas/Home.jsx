import React, { Suspense, useEffect, useState, useMemo, useCallback } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { useSpring, animated } from '@react-spring/three';
import { Globals } from '@react-spring/shared';

Globals.assign({
  frameLoop: 'always',
});

const ErrorComponent = ({ message }) => (
  <div style={{ color: 'red', padding: '20px' }}>
    Error: {message}
  </div>
);

const Scene = ({ parentRef }) => {
  const { setSize } = useThree();
  const [isVisible, setVisible] = useState(false);
  
  const computer = useGLTF('./copocaneta_setup/copocaneta_setup.gltf');
  const memoizedComputer = useMemo(() => computer, [computer]);

  const handleResize = useCallback(() => {
    if (parentRef.current) {
      let height = parentRef.current.offsetHeight;
      let width = parentRef.current.offsetWidth;
      setSize(width, height);
    }
  }, [parentRef, setSize]);

  useEffect(() => {
    const timer = setTimeout(handleResize, 200);
    return () => clearTimeout(timer);
  }, [handleResize]);

  const { deskRotation } = useSpring({
    from: {
      deskRotation: Math.PI / 7,
    },
    to: [
      {
        deskRotation: -Math.PI / 7,
      },
      {
        deskRotation: Math.PI / 7,
      },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
      duration: 25000,
    },
    loop: true,
    immediate: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (parentRef.current) {
        let height = parentRef.current.offsetHeight;
        let width = parentRef.current.offsetWidth;
        setSize(width, height);
        deskRotation.finish();
        setVisible(true);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [parentRef, setSize, deskRotation]);

  return (
    <>
      {isVisible && (
        <mesh>
          <hemisphereLight intensity={0.15} groundColor="black" />
          <pointLight intensity={1} />
          <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
          />
          <animated.group rotation-y={deskRotation}>
            <primitive
              object={memoizedComputer.scene}
              onClick={(e) => console.log('you clicked', e.object.name)}
              scale={0.95}
              position={[0, -4.25, -1.5]}
              rotation={[-0.01, -0.2, -0.1]}
            />
          </animated.group>
        </mesh>
      )}
    </>
  );
};

const Home = ({ parentRef }) => {
  const [error] = useState(null);

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader insideCanvas={true} />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Scene parentRef={parentRef} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Home;
