import { Link as ReactLink, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo.svg';
import LogoSubtitle from '../../assets/images/logo-sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, GridItem, Image, Link, useTheme } from '@chakra-ui/react';
import ResponsiveMenu from '../ResponsiveMenu';

const Sidebar = () => {
  const theme = useTheme();

  return (
    <GridItem
      w={{ base: '100%', lg: '68px' }}
      background={theme.colors.navBarBgLight}
      height={{ base: '90px', lg: '100%' }}
      minHeight={{ base: '90px', lg: '500px' }}
      className="nav-bar"
      display={'flex'}
      flexDirection={{ base: 'row', lg: 'column' }}
      justifyContent={'space-between'}
      zIndex={4}
    >
      {/* Logo */}
      <Link as={ReactLink} className="logo" to="/" padding={'8px 0'}>
        <Image
          display={'block'}
          margin={{ base: '8px 15px', lg: '8px auto' }}
          width={'54px'}
          height={'auto'}
          src={Logo}
          alt="logo"
        />
      </Link>
      {/* Responsive Menu */}
      <ResponsiveMenu />
      {/* Desktop Menu */}
      <Box
        display={{ base: 'none', lg: 'flex' }}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
      </Box>
      {/* Social media icons */}
      <Box display={{ base: 'none', lg: 'block' }}>
        <ul>
          <li>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/thiago-bernardi/"
              isExternal
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/copocaneta/"
              isExternal
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/8754987/thiago-bernardi/"
              isExternal
            >
              <FontAwesomeIcon icon={faStackOverflow} color="#4d4d4e" />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://discordapp.com/users/724435328823197757/"
              isExternal
            >
              <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
            </Link>
          </li>
        </ul>
      </Box>
    </GridItem>
  );
};

export default Sidebar;
