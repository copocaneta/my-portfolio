import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import Logo from '../../Logo';
import Loader from 'react-loaders';
import { Box, Grid, GridItem, Text, useTheme } from '@chakra-ui/react';
import HomeAnimation from '../../HomePicture';
import CodeBrackets from '../../CodeBrackets';
import HomeHeadingText from '../../HomeHeadingText';

const Home = () => {
  const theme = useTheme();

  return (
    <Box display={'flex'} justifyContent={'center'} w={'100%'} h={'100%'}>
      <Grid
        className="container home-page"
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        w={'100%'}
        mx={{ base: '20px', lg: '50px' }}
      >
        <GridItem
          className="text-zone"
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          zIndex={999999}
        >
          <HomeHeadingText />
          <Text as="h2">Fullstack JavaScript Developer</Text>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </GridItem>
        <GridItem
          zIndex={999998}
          position={{ base: 'absolute', lg: 'unset' }}
          display={'flex'}
          width={'100%'}
          height={{ base: '80vh', lg: '100%' }}
          justifyContent={{ base: 'center', lg: 'unset' }}
        >
          <HomeAnimation />
        </GridItem>
      </Grid>
      <Loader type="pacman" />
    </Box>
  );
};

export default Home;
