import { Box, Grid, GridItem } from '@chakra-ui/react';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { pageTransition, pageVariants } from '../../../utils/page-transition';
import AnimatedLetters from '../../AnimatedLetters';
import PageLoader from '../../PageLoader';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <Box display={'flex'} justifyContent={'center'} w={'100%'} h={'100%'}>
      <Grid
        as={motion.div}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="out"
        className="container about-page"
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        templateRows={{ base: '1fr 400px', lg: 'auto' }}
        w={'100%'}
        mx={'50px'}
      >
        <GridItem
          className="text-zone"
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Hello there, I am Thiago Bernardi, a Full Stack developer from São
            Paulo Brazil, I've been working with web development, specially
            frontend development since 2001, I've started with simple HTML and
            CSS then moved to ASP 1.0 and then to PHP. I've also programmed on
            Python doing backend and automation tasks mostly for the web hosting
            industry.
          </p>
          <p>
            I also have experience with Django and Flask (Python frameworks) but
            my passion is for JavaScript and this is where i thrive and
            concentrate the latest years of my web development career. I've been
            programming on NodeJS for Rest APIs using Express, NestJS or
            sometimes frameworks like Strapi or Sanity.
          </p>
          <p>
            On the frontend I've been using React and its frameworks such as
            Gatsby and NextJS. I have extensive knowledge on CSS and follow the
            best coding practices such as clean code and Test Driven Development
            (Jest and React Testing Library). Lately I've been working a lot
            with Web3, joining JavaScript with blockchains dapps by using
            libraries such as Moralis and Alchemy. I've helped them build
            several projects that innovated the Web3 scene.
          </p>
        </GridItem>
        <GridItem
          className="stage-cube-cont"
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={{ base: '400px', lg: 'auto' }}
        >
          <Box
            as={'div'}
            marginTop={{ base: '-75%', lg: '-25%' }}
            marginLeft={{ base: '-75%', lg: '-25%' }}
            className="cubespinner"
          >
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5Ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </Box>
        </GridItem>
      </Grid>

      <PageLoader />
    </Box>
  );
};

export default About;
