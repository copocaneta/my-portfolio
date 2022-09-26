import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import './index.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import PageLoader from '../../PageLoader';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Link,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../../utils/page-transition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const theme = useTheme();

  return (
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
        templateColumns={{ base: '1fr', lg: '1fr 53%' }}
        templateRows={{ base: '1fr 1fr', lg: '1fr auto' }}
        w={'80%'}
        mx={'50px'}
        className="container contact-page"
      >
        <GridItem
          className="text-zone"
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          paddingRight={'3em'}
        >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={'Contact me'.split('')}
              idx={15}
            />
          </h1>
          <Text>
            If you would like to get in touch with me, use one of the options
            below.
          </Text>
          <Flex marginTop={'40px'} gap={'20px'}>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://t.me/thiago_bernardi"
              isExternal
            >
              <IconButton
                icon={
                  <FontAwesomeIcon
                    icon={faTelegram}
                    size={'3x'}
                    color={'#229ED9'}
                  />
                }
              />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://discordapp.com/users/724435328823197757/"
              isExternal
            >
              <IconButton
                icon={
                  <FontAwesomeIcon
                    icon={faDiscord}
                    color="#7289da"
                    size={'3x'}
                  />
                }
              />
            </Link>
          </Flex>
        </GridItem>
        <GridItem>
          <Box
            as={'div'}
            position={{ base: 'initial', lg: 'absolute' }}
            top={{ base: 'unset', lg: '50px' }}
            right={{ base: 'unset', lg: '30%' }}
            zIndex={{ base: 'unset', lg: '999999' }}
            width={{ base: 'unset', lg: '267px' }}
            padding={'20px'}
            marginY={{ base: '20px', lg: 'unset' }}
            // opacity={1}
            animation={'fadeIn 1s 1.5s;'}
            // animationF
            color={'white'}
            fontFamily={'Helvetica'}
            fontSize={'17px'}
            fontWeight={'300'}
            background={theme.colors.primaryColorLight}
            className="info-map"
          >
            Thiago Bernardi,
            <br />
            São Paulo, SP <br />
            Brasil
            <br />
          </Box>
          <div className="map-wrap">
            <MapContainer
              center={[-23.548059243667304, -46.63453909542767]}
              zoom={3}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[-23.548059243667304, -46.63453909542767]}>
                <Popup>Thiago Bernardi</Popup>
              </Marker>
            </MapContainer>
          </div>
        </GridItem>
      </Grid>
      <PageLoader />
    </Box>
  );
};

export default Contact;
