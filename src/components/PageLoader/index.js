import Loader from 'react-loaders';
import { motion } from 'framer-motion';

const PageLoader = () => {
  const loaderVariants = {
    initial: {
      opacity: 0,
      x: '-100vw',
    },
    in: {
      opacity: [1, 1, 1, 1, 0],
      x: ['-100vw', '-50vw', '-50vw', '-50vw', '200vw'],
    },
    out: {
      x: '100vw',
      opacity: 0,
    },
  };
  const loaderTransition = {
    type: 'tween',
    ease: 'easeIn',
    // x: { delay: 4 },
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={loaderVariants}
      transition={loaderTransition}
    >
      <Loader type="pacman" />
    </motion.div>
  );
};

export default PageLoader;
