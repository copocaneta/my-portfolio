import './index.scss';
import { Box, Flex, Text, useTheme } from '@chakra-ui/react';
import PageLoader from '../../PageLoader';
import { motion } from 'framer-motion';
import { pageVariants } from '../../../utils/page-transition';
import HomeCanvas from '../../canvas/Home';
import { useRef } from 'react';

const Home = () => {
  const theme = useTheme();
  const stageCanvasRef = useRef(null);

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      w={'100%'}
      h={'100%'}
      backgroundImage={require('../../../assets/images/herobg.png')}
    >
      <Box
        as={motion.div}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="out"
        className="container home-page"
        w={'100%'}
      >
        <Flex
          zIndex={999998}
          flex={1}
          display={'flex'}
          width={'100%'}
          height={{ base: '100%' }}
          justifyContent={{ base: 'center', md: 'unset' }}
        >
          <Flex position="absolute">
            <Text
              as="h1"
              color={{
                base: 'white',
                // lg: theme.colors.textColorLight
              }}
              textShadow={{ base: '2px 2px black;', lg: 'none' }}
              wordBreak={'break-word'}
              fontSize={{ base: '46px', lg: '53px' }}
              lineHeight={'38px'}
            >
              Hi, I'm Thiago Bernardi
            </Text>
          </Flex>
          <Flex flex={1} ref={stageCanvasRef}>
            <HomeCanvas parentRef={stageCanvasRef} />
          </Flex>
        </Flex>
      </Box>
      <PageLoader />
    </Box>
  );
};

export default Home;
