import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import { useState } from 'react';
import PageLoader from '../../PageLoader';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../../utils/page-transition';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  return (
    <Box display={'flex'} justifyContent={'center'} w={'100%'} h={'100%'}>
      <Grid
        as={motion.div}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="out"
        templateColumns={'1fr 1fr'}
        w={'100%'}
        mx={'50px'}
        className="container portfolio-page"
      >
        <GridItem>
          <h1 className="page-title">
            <AnimatedLetters
              strArr={'Portfolio'.split('')}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
        </GridItem>
      </Grid>
      <PageLoader />
    </Box>
  );
};

export default Portfolio;
