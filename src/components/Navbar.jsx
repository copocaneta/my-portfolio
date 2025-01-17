import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
  HStack,
  useDisclosure,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Container,
  Text,
} from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { GiSharkFin } from 'react-icons/gi'
import { HiMenu } from 'react-icons/hi'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

const MotionBox = motion(Box)

const BrandLogo = () => (
  <HStack 
    spacing={1}
    position="relative"
    cursor="pointer"
    as="a"
    href="/"
    _hover={{
      "& .logo-icon": {
        transform: "rotate(15deg) scale(1.2)",
      },
      "& .brand-text": {
        bgGradient: "linear(to-r, brand.secondary, brand.primary)",
        letterSpacing: "0.05em"
      }
    }}
    _after={{
      content: '""',
      position: 'absolute',
      bottom: '-2px',
      left: '25%',
      width: '50%',
      height: '2px',
      bgGradient: "linear(to-r, transparent, brand.primary, transparent)",
    }}
  >
    <Box
      className="logo-icon"
      display="flex"
      alignItems="center"
      transition="transform 0.2s ease"
    >
      <GiSharkFin size="20px" color="#6B46C1" />
    </Box>
    <Box
      as="span"
      className="brand-text"
      fontSize="md"
      fontWeight="bold"
      fontFamily="'Orbitron', sans-serif"
      bgGradient="linear(to-r, brand.primary, brand.secondary)"
      bgClip="text"
      transition="all 0.3s ease"
    >
      Thiago Bernardi
    </Box>
  </HStack>
)

const NavButton = ({ children, to, onClick }) => (
  <Box 
    as="button" 
    onClick={onClick}
    cursor="pointer"
  >
    <Button
      variant="ghost"
      size="sm"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '0%',
        height: '2px',
        bgGradient: "linear(to-r, brand.primary, brand.accent)",
        transition: 'width 0.3s ease-in-out',
      }}
      _hover={{
        bg: 'transparent',
        _before: {
          width: '100%',
        },
        transform: 'translateY(-2px)',
      }}
      transition="all 0.3s ease"
    >
      {children}
    </Button>
  </Box>
)

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = async (section, shouldCloseMenu = false) => {
    if (shouldCloseMenu) {
      onClose()
    }

    if (location.pathname !== '/') {
      // First navigate to home
      await navigate('/', { replace: true })
      
      // After navigation is complete, scroll to the section
      requestAnimationFrame(() => {
        setTimeout(() => {
          const element = document.getElementById(section)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      })
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const menuItems = ['About', 'Experience', 'Expertise', 'Blog', 'Connect']

  return (
    <Box
      position="fixed"
      w="100vw"
      backdropFilter="blur(10px)"
      bg={useColorModeValue('rgba(247, 250, 252, 0.8)', 'rgba(26, 32, 44, 0.8)')}
      zIndex="sticky"
      left={0}
      borderBottom="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Box
        maxW="736px"
        mx="auto"
        px={4}
        h={16}
      >
        <Flex h="100%" alignItems="center" justifyContent="space-between">
          <BrandLogo />

          {/* Desktop Menu */}
          <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
            <Stack direction="row" spacing={4}>
              {menuItems.map((item) => (
                <NavButton 
                  key={item} 
                  to={item.toLowerCase()}
                  onClick={() => handleNavClick(item.toLowerCase())}
                >
                  {item}
                </NavButton>
              ))}
              <IconButton
                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                onClick={toggleColorMode}
                variant="ghost"
                size="sm"
              />
            </Stack>
          </Flex>

          {/* Mobile Menu Button */}
          <HStack display={{ base: 'flex', md: 'none' }} spacing={2}>
            <IconButton
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
            />
            <IconButton
              icon={<HiMenu size="24px" />}
              onClick={onOpen}
              variant="ghost"
              aria-label="Open Menu"
            />
          </HStack>

          {/* Mobile Menu Drawer */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg={useColorModeValue('white', 'gray.800')}>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="stretch" pt={4}>
                  {menuItems.map((item) => (
                    <Box
                      key={item}
                      as="button"
                      w="full"
                      onClick={() => handleNavClick(item.toLowerCase(), true)}
                    >
                      <Button variant="ghost" w="full">
                        {item}
                      </Button>
                    </Box>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </Box>
  )
} 