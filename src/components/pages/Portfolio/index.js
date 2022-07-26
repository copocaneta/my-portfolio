import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import { useEffect, useState } from 'react';
import PageLoader from '../../PageLoader';
import {
  AspectRatio,
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  useTheme,
} from '@chakra-ui/react';
import { motion, useAnimationControls } from 'framer-motion';
import { pageVariants } from '../../../utils/page-transition';
import { portfolioMockData } from './mock-data';
import PortfolioCardItem from './portfiolio-card';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);

  const controls = useAnimationControls();

  const startPortAnimation = () => {
    controls.start((idx) => ({
      scale: 1.0,
      transition: { delay: 0.1 * idx },
    }));
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    setTimeout(() => {
      startPortAnimation();
      setFirstLoad(false);
    }, 2000);
  });

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'center'}
        w={'100%'}
        h={'100%'}
        mt={{ base: '30px', lg: 'unset' }}
      >
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
              everything I did will be here since most is under non disclosure
              agreements with the companies I work for or have worked in the
              past.
            </Text>
            <Box
              as={motion.div}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { delay: 1.5, duration: 2.5 },
              }}
              my={'50px'}
              border={'1px solid #ddd'}
              rounded={30}
              padding={5}
            >
              <Tabs isLazy={true} isFitted variant="soft-rounded">
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
                    _selected={{
                      color: 'white',
                      bg: theme.colors.altColorLight,
                    }}
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
                        gap={10}
                        templateColumns={{
                          base: 'minmax(100px, 1fr)',
                          lg: '1fr 1fr 1fr',
                        }}
                      >
                        {portfolioMockData.frontend.map((item, idx) => {
                          return (
                            <GridItem key={idx}>
                              <PortfolioCardItem
                                orderOnPage={'first'}
                                item={item}
                                idx={idx}
                                controls={controls}
                                startPortAnimation={startPortAnimation}
                                firstLoad={firstLoad}
                                onOpen={onOpen}
                                setModalData={setModalData}
                              />
                            </GridItem>
                          );
                        })}
                      </Grid>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box>
                      <Grid
                        gap={10}
                        templateColumns={{
                          base: 'minmax(100px, 1fr)',
                          lg: '1fr 1fr 1fr',
                        }}
                      >
                        {portfolioMockData.backend.map((item, idx) => {
                          return (
                            <GridItem key={idx}>
                              <PortfolioCardItem
                                orderOnPage={'second'}
                                item={item}
                                // idx={idx}
                                controls={controls}
                                startPortAnimation={startPortAnimation}
                                firstLoad={firstLoad}
                                onOpen={onOpen}
                                setModalData={setModalData}
                              />
                            </GridItem>
                          );
                        })}
                      </Grid>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </GridItem>
        </Grid>
        <PageLoader />
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        // size={'xl'}
        rounded={30}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent rounded={'20px'}>
          <ModalHeader>
            <Text as="span" color="black">
              {modalData?.name}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              {console.log(modalData?.image)}
              <AspectRatio ratio={16 / 9} marginBottom={'20px'}>
                <Image
                  src={
                    modalData &&
                    require(`../../../assets/images/${modalData?.image}`)
                  }
                  rounded={30}
                />
              </AspectRatio>

              <Text as="span" color="black">
                {modalData?.description}
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Portfolio;
