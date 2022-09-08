import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import emailjs from '@emailjs/browser';
import './index.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import PageLoader from '../../PageLoader';
import { Box, Grid, GridItem, useTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../../utils/page-transition';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const refForm = useRef();

  const refCaptcha = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const [open, setOpen] = useState(false);

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = refCaptcha.current.getValue();
    console.log('token', token);
    const params = {
      ...toSend,
      'g-recaptcha-response': token,
    };
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE,
        params,
        process.env.REACT_APP_EMAIL_JS_USER
        // `g-recaptcha-response: ${}`
      )
      .then(
        ({ status }) => {
          console.log('EMAILJS SENT', status.code);
        },
        (err) => {
          console.log('EMAILJS ERROR', err);
        }
      );
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

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
          <p>
            If you would like to get in touch with me, please do not hesitate to
            contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    value={open.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    value={open.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    required
                  />
                </li>
                <li>
                  <input
                    value={open.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    value={open.message}
                    onChange={handleChange}
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
              <ReCAPTCHA
                ref={refCaptcha}
                sitekey={process.env.REACT_APP_SITE_KEY}
                // onChange={testCaptcha}
              />
            </form>
          </div>
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
