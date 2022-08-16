import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import { useState } from 'react';
import PageLoader from '../../PageLoader';
import {
  AspectRatio,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
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
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useDisclosure,
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
import { AddIcon } from '@chakra-ui/icons';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState(null);

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
          <Box my={'50px'} border={'1px solid #ddd'} rounded={30} padding={5}>
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
                      gap={10}
                      templateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}
                    >
                      {portfolioMockData.frontend.map((item, idx) => {
                        return (
                          <GridItem key={idx}>
                            <Box border="1px solid #ccc" rounded={30}>
                              <AspectRatio ratio={16 / 9}>
                                <Button
                                  roundedTop={30}
                                  p={0}
                                  onClick={() => {
                                    onOpen();
                                    setModalData(item);
                                  }}
                                >
                                  <Image
                                    onClick={() => {
                                      onOpen();
                                      setModalData(item);
                                    }}
                                    roundedTop={30}
                                    src={require(`../../../assets/images/${item.image}`)}
                                  />
                                </Button>
                              </AspectRatio>
                              <Box mt={'11px'} mx={'15px'}>
                                <Text as="span" color="black">
                                  <strong>{item.name}</strong>
                                </Text>
                                <HStack my={4} spacing={4}>
                                  {item.tags.map((tag) => (
                                    <Tag size={'lg'} key={tag} variant="subtle">
                                      <TagLeftIcon
                                        boxSize="12px"
                                        as={AddIcon}
                                      />
                                      <TagLabel>{tag}</TagLabel>
                                    </Tag>
                                  ))}
                                </HStack>
                              </Box>
                            </Box>
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
                      templateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}
                    >
                      {portfolioMockData.backend.map((item, idx) => {
                        return (
                          <GridItem key={idx}>
                            <Box border="1px solid #ccc" rounded={30}>
                              <AspectRatio ratio={16 / 9}>
                                <Button
                                  roundedTop={30}
                                  p={0}
                                  onClick={() => {
                                    onOpen();
                                    setModalData(item);
                                  }}
                                >
                                  <Image
                                    roundedTop={30}
                                    src={require(`../../../assets/images/${item.image}`)}
                                  />
                                </Button>
                              </AspectRatio>

                              <Box mt={'11px'} mx={'15px'}>
                                <Text as="span" color="black">
                                  <strong>{item.name}</strong>
                                </Text>
                                <HStack my={4} spacing={4}>
                                  {item.tags.map((tag) => (
                                    <Tag size={'lg'} key={tag} variant="subtle">
                                      <TagLeftIcon
                                        boxSize="12px"
                                        as={AddIcon}
                                      />
                                      <TagLabel>{tag}</TagLabel>
                                    </Tag>
                                  ))}
                                </HStack>
                              </Box>
                            </Box>
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
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text as="span" color="black">
              {modalData?.name}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="span" color="black">
              {modalData?.description}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <PageLoader />
    </Box>
  );
};

export default Portfolio;
