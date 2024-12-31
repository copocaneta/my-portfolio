import { Html, useProgress } from '@react-three/drei';

const LoaderContent = ({ progress }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <span className="canvas-loader"></span>
    <p
      style={{
        fontSize: 14,
        color: '#F1F1F1',
        fontWeight: 800,
        marginTop: 40,
      }}
    >
      {progress.toFixed(2)}%
    </p>
  </div>
);

const CanvasInnerLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <LoaderContent progress={progress} />
    </Html>
  );
};

const CanvasLoader = ({ insideCanvas = false }) => {
  if (insideCanvas) {
    return <CanvasInnerLoader />;
  }
  return <LoaderContent progress={0} />;
};

export default CanvasLoader;
