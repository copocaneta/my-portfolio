import Loader from 'react-loaders';
import { motion } from 'framer-motion';

const PageLoader = () => {
  const loaderVariants = {
    initial: {
      opacity: 0,
      x: '-200vw',
    },
    in: {
      opacity: 1,
      x: '-50vw',
    },
    out: {
      opacity: [1, 0],
      x: ['-100vw'],
    },
  };
  const loaderTransition = {
    type: 'tween',
    ease: 'easeIn',
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
