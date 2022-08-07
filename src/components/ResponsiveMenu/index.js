import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  IconButton,
  Input,
  useDisclosure,
  useTheme,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const ResponsiveMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const theme = useTheme();
  return (
    <Box display={{ lg: 'none' }}>
      <IconButton
        ref={btnRef}
        aria-label="Menu"
        className="hamburguerMenu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        backgroundColor={'transparent'}
        fontSize={'32'}
        mt={'20px'}
        mr={'20px'}
        _active={{ background: 'transparent' }}
        _focus={{ background: 'transparent' }}
      />
      {/* <Button  colorScheme="teal" >
        Open
      </Button> */}

      <Drawer
        display={{ lg: 'none' }}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'full'}
      >
        <DrawerOverlay background={'transparent'} />
        <DrawerContent
          h={'54px'}
          mt={'90px'}
          background={theme.colors.navBarBgLight}
        >
          <DrawerCloseButton />
          <DrawerBody>
            <nav>
              <Grid templateColumns={'1fr 1fr 1fr 1fr'} fontSize={'27px'}>
                <GridItem>
                  <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                  </NavLink>
                </GridItem>
                <GridItem>
                  <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                  >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                  </NavLink>
                </GridItem>
                <GridItem>
                  <NavLink
                    exact="true"
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio"
                  >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                  </NavLink>
                </GridItem>
                <GridItem>
                  <NavLink
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                  >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                  </NavLink>
                </GridItem>
              </Grid>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ResponsiveMenu;
