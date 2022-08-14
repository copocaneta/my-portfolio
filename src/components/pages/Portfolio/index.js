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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
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
import { portfolioMockData } from './mock-data';

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
          <Text as={'p'}>
            This is where I will list some of my most recent work. Not
            everything I did will be here since most is under confidential
            agreements with the companies I work.
          </Text>
          <Box mt={'50px'} border={'1px solid #ddd'} rounded={30} padding={5}>
            <Tabs isFitted variant="soft-rounded">
              <TabList mb="1em">
                <Tab
                  _selected={{
                    color: 'white',
                    bg: theme.colors.altColorLight,
                  }}
                >
                  <Text as="span" fontSize="2xl">
                    🛠 Frontend
                  </Text>
                </Tab>
                <Tab
                  _selected={{ color: 'white', bg: theme.colors.altColorLight }}
                >
                  <Text as="span" fontSize="2xl">
                    🧰 Backend
                  </Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box>
                    <Grid
                      gap={3}
                      templateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}
                    >
                      {portfolioMockData.frontend.map((item) => {
                        return (
                          <GridItem>
                            <Box border="1px solid #ccc" borderTop={30}>
                              <Image src={item.image} />
                            </Box>
                          </GridItem>
                        );
                      })}
                    </Grid>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </GridItem>
      </Grid>
      <PageLoader />
    </Box>
  );
};

export default Portfolio;
