import {
  Box,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { pageVariants } from '../../../utils/page-transition';
import AnimatedLetters from '../../AnimatedLetters';
import PageLoader from '../../PageLoader';
import IgsImage from '../../../assets/images/about/igs.jpeg';
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
        w={'80%'}
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
          <Box display={'flex'} gap={'15px'} flexDir={'column  '}>
            <Text>
              Hello there, I am Thiago Bernardi, a Full Stack developer from São
              Paulo Brazil, I've been working with web development, specially
              frontend development since 2001, I've started with simple HTML and
              CSS then moved to ASP 1.0 and then to PHP. I've also programmed on
              Python doing backend and automation tasks mostly for the web
              hosting industry.
            </Text>
            <Text>
              I also have experience with Django and Flask (Python frameworks)
              but my passion is for JavaScript and this is where i thrive and
              concentrate the latest years of my web development career. I've
              been programming on NodeJS for Rest APIs using Express, NestJS or
              sometimes frameworks like Strapi or Sanity.
            </Text>
            <Text>
              On the frontend I've been using React and its frameworks such as
              Gatsby and NextJS. I have extensive knowledge on CSS and follow
              the best coding practices such as clean code and Test Driven
              Development (Jest and React Testing Library). Lately I've been
              working a lot with Web3, joining JavaScript with blockchains dapps
              by using libraries such as Moralis and Alchemy.
            </Text>

            <Text>
              Lately I've been working as a Full Stack engineer in a London
              based web3 venture builder company and have been helping them
              build several projects that innovated the Web3 scene.
            </Text>
          </Box>
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
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
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
      {/* TODO: later, make a career and Education section */}
      {/* <Box w={'80%'} mt={'25px'} display={'flex'} flexDir={'column'}>
        <Text as={'h3'} fontSize={'1.5em'}>
          Career <FontAwesomeIcon icon={faSuitcase} />
        </Text>
        <Box
          display={'flex'}
          w={'100%'}
          flexDir={'column'}
          alignItems={'center'}
        >
          <Box
            mt={'10px'}
            rounded={'10px'}
            border="1px"
            borderColor="gray.300"
            background={'white'}
            w={'95%'}
            p={10}
          >
            <Grid templateColumns={'100px 1fr 150px'} gap={'20px'}>
              <GridItem>
                <Image src={IgsImage} />
              </GridItem>
              <GridItem display={'flex'}>
                <VStack
                  display={'flex'}
                  flexDir={'column'}
                  alignItems={'flex-start'}
                  justifyContent={'center'}
                >
                  <Text>
                    <strong>Company</strong>
                  </Text>
                  <Text>
                    <strong>Position</strong>
                  </Text>
                  <HStack>
                    <Tag>JavaScript</Tag>
                    <Tag>CSS</Tag>
                    <Tag>Python</Tag>
                  </HStack>
                </VStack>
              </GridItem>
              <GridItem
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'center'}
              >
                <Text>2021</Text>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box> */}

      <PageLoader />
    </Box>
  );
};

export default About;
