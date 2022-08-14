import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import { useState } from 'react';
import PageLoader from '../../PageLoader';
import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Tag,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../../utils/page-transition';
import EqualizerPortfolioImg from '../../../assets/images/portffolio/equalizer.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from '@chakra-ui/react';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const theme = useTheme();
  return (
    <Box display={'flex'} justifyContent={'center'} w={'100%'} h={'100%'}>
      <Grid
        as={motion.div}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="out"
        templateColumns={'1fr'}
        w={'80%'}
        mx={'50px'}
        className="container portfolio-page"
      >
        <GridItem
          className="text-zone"
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <h1>
            <AnimatedLetters
              strArr={'Portfolio'.split('')}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            This is where I will list some of my most recent work. Not
            everything I did will be here since most is under confidential
            agreements with the companies I work.
          </p>
          <Grid templateColumns={'1fr 420px'} marginY={'40px'} gap={4}>
            <GridItem>
              <AspectRatio ratio={16 / 9}>
                <Image src={EqualizerPortfolioImg} />
              </AspectRatio>
            </GridItem>
            <GridItem
              display={'flex'}
              flexDir={'column'}
              gap={'20px'}
              fontSize={'20px'}
            >
              <Flex flexDir={'column'} gap={'5px'}>
                <Text color={theme.colors.textColorLight} fontSize={'0.6em'}>
                  Frotend Project
                </Text>
                <Text color={theme.colors.textColorLight} fontSize={'1.2em'}>
                  Equalizer landing page
                </Text>
              </Flex>
              <Box
                display={'flex'}
                flexDirection={'column'}
                gap={'5px'}
                background={theme.colors.altColorLight}
                padding={8}
              >
                <Text
                  as={'span'}
                  fontSize={'0.8em'}
                  fontWeight={400}
                  color={'white'}
                  textAlign={'right'}
                >
                  A minimal landing page for a system audio equalizer app
                  specifically designed for Android and iOS.
                </Text>
              </Box>
              <HStack spacing={4}>
                <Tag
                  size={'md'}
                  variant="solid"
                  background={theme.colors.secondaryColorLight}
                >
                  HTML
                </Tag>
                <Tag
                  size={'md'}
                  variant="solid"
                  background={theme.colors.secondaryColorLight}
                >
                  CSS Grid
                </Tag>
                <Tag
                  size={'md'}
                  variant="solid"
                  background={theme.colors.secondaryColorLight}
                >
                  Flex
                </Tag>
              </HStack>
              <HStack>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/copocaneta/frontend-projects/tree/main/equalizer-landing-page"
                  isExternal
                >
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://copocaneta.github.io/frontend-projects/equalizer-landing-page/"
                  isExternal
                >
                  <FontAwesomeIcon icon={faLink} color="#4d4d4e" />
                </Link>
              </HStack>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <PageLoader />
    </Box>
  );
};

export default Portfolio;
