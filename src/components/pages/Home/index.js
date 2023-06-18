import { Link } from 'react-router-dom';
import './index.scss';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
  useTheme,
} from '@chakra-ui/react';
import HomeHeadingText from '../../HomeHeadingText';
import HomePicture from '../../HomePicture';
import CodeBrackets from '../../CodeBrackets';
import PageLoader from '../../PageLoader';
import { motion } from 'framer-motion';
import { pageVariants } from '../../../utils/page-transition';
import mycv from '../../../assets/cv/resume_thiago_bernardi.pdf';
import HomeCanvas from '../../canvas/Home';
import { useEffect, useRef, useState } from 'react';

// const useDelayedRender = (delay) => {
//   const [delayed, setDelayed] = useState(true);
//   useEffect(() => {
//     const timeout = setTimeout(() => setDelayed(false), delay);
//     return () => clearTimeout(timeout);
//   }, []);
//   return (fn) => !delayed && fn();
// };

const Home = () => {
  const theme = useTheme();
  const stageCanvasRef = useRef(null);
  // const delayedRender = useDelayedRender(15500);

  return (
    <Box display={'flex'} justifyContent={'center'} w={'100%'} h={'100%'}>
      <Box
        as={motion.div}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="out"
        className="container home-page"
        w={'100%'}
        mx={{ base: '20px', lg: '50px' }}
      >
        <Flex
          zIndex={999998}
          flex={1}
          // position={{ base: 'absolute', md: 'unset' }}
          display={'flex'}
          width={'100%'}
          height={{ base: '100%' }}
          justifyContent={{ base: 'center', md: 'unset' }}
          // className={'image-zone'}
        >
          {/* <Text>Teste</Text> */}
          <Flex position="absolute">
            <Text
              as="h1"
              color={{ base: 'white', lg: theme.colors.textColorLight }}
              textShadow={{ base: '2px 2px black;', lg: 'none' }}
              wordBreak={'break-word'}
              fontSize={{ base: '46px', lg: '53px' }}
              lineHeight={'38px'}
              // className={'home-heading'}
            >
              Hi, I'm Thiago Bernardi
            </Text>
          </Flex>
          {/* <Flex */}
          {/*   flex={1} */}
          {/*   justify="center" */}
          {/*   alignItems="center" */}
          {/*   width="100%" */}
          {/*   height="100%" */}
          {/*   position="relative" */}
          {/*   mx="auto" */}
          {/* > */}
          <>
            <Flex flex={1} ref={stageCanvasRef}>
              <HomeCanvas parentRef={stageCanvasRef} />
            </Flex>
            {/* useDelayedRender( */}
            {/* <HomeCanvas />) */}
          </>
          {/* <Text>Teste</Text> */}
          {/* </Flex> */}
        </Flex>
      </Box>
      <PageLoader />
    </Box>
  );
};

export default Home;
