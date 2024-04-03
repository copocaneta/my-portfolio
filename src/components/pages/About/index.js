import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { pageVariants } from '../../../utils/page-transition';
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
              Hello, I'm Thiago Bernardi, a Full Stack Engineer with extensive
              experience in web development, currently thriving as a Tech Lead.
              My tech journey began in 2001, developing skills across ASP, PHP,
              and Python for backend development and automation. I have a
              balanced expertise in web development, proficient in using React
              and NodeJS to create comprehensive web solutions.
            </Text>
            <Text>
              With years of experience as a DevOps engineer, I've mastered the
              art of optimizing development pipelines, enhancing operational
              efficiency, and deploying scalable cloud infrastructures. My
              commitment to maintaining high-quality standards is evident in my
              practice of Test Driven Development (TDD).
            </Text>
            <Text>
              In recent years, I have led a variety of innovative projects,
              notably in AI and Web3 sectors, where I utilized my JavaScript
              expertise to drive advancements in blockchain technology and AI
              applications.
            </Text>

            <Text>
              As a Tech Lead, I've spearheaded the development of cutting-edge
              projects across both AI and Web3 domains, demonstrating my ability
              to lead diverse and pioneering initiatives in the fast-paced tech
              industry.
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
