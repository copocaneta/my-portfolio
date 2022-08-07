import Loader from 'react-loaders';
import { motion } from 'framer-motion';
import { loaderVariants, loaderTransition } from '../../utils/page-transition';
import { Box, useTheme } from '@chakra-ui/react';

const PageLoader = () => {
  const theme = useTheme();
  return (
    <Box
      as={motion.div}
      // w={'100vw'}
      // h={'100vh'}
      // position={'absolute'}
      background={theme.colors.backgroundLight}
      initial="initial"
      animate="in"
      exit="out"
      variants={loaderVariants}
      transition={loaderTransition}
    >
      <Loader type="pacman" />
    </Box>
  );
};

export default PageLoader;
