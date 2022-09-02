import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Grid,
  GridItem,
  IconButton,
  Link,
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
        color={'white'}
        ref={btnRef}
        aria-label="Menu"
        className="hamburguerMenu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        backgroundColor={'transparent'}
        fontSize={'32'}
        mt={'30px'}
        mr={'30px'}
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
          <DrawerCloseButton color={'white'} />
          <DrawerBody>
            <nav className={'responsive-menu'}>
              <Grid templateColumns={'1fr 1fr 1fr 1fr'} fontSize={'27px'}>
                <GridItem>
                  <Link
                    as={NavLink}
                    _activeLink={{ svg: { color: theme.colors.altColorLight } }}
                    exact="true"
                    // activeclassname="active"
                    to="/"
                  >
                    <FontAwesomeIcon icon={faHome} color={'white'} />
                  </Link>
                </GridItem>
                <GridItem>
                  <Link
                    as={NavLink}
                    _activeLink={{ svg: { color: theme.colors.altColorLight } }}
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                  >
                    <FontAwesomeIcon icon={faUser} color={'white'} />
                  </Link>
                </GridItem>
                <GridItem>
                  <Link
                    as={NavLink}
                    _activeLink={{ svg: { color: theme.colors.altColorLight } }}
                    exact="true"
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio"
                  >
                    <FontAwesomeIcon icon={faSuitcase} color={'white'} />
                  </Link>
                </GridItem>
                <GridItem>
                  <Link
                    as={NavLink}
                    _activeLink={{ svg: { color: theme.colors.altColorLight } }}
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                  >
                    <FontAwesomeIcon icon={faEnvelope} color={'white'} />
                  </Link>
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
