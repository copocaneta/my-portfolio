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
} from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { GiSharkFin } from 'react-icons/gi'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const BrandLogo = () => (
  <HStack 
    spacing={1}
    position="relative"
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
    <MotionBox
      whileHover={{ rotate: 15, scale: 1.2 }}
      transition={{ duration: 0.2 }}
      display="flex"
      alignItems="center"
    >
      <GiSharkFin size="20px" color="#6B46C1" />
    </MotionBox>
    <Box
      as="span"
      fontSize="md"
      fontWeight="bold"
      fontFamily="'Orbitron', sans-serif"
      bgGradient="linear(to-r, brand.primary, brand.secondary)"
      bgClip="text"
      _hover={{
        bgGradient: "linear(to-r, brand.secondary, brand.primary)",
        letterSpacing: "0.05em"
      }}
      transition="all 0.3s ease"
    >
      Thiago Bernardi
    </Box>
  </HStack>
)

const NavButton = ({ children, to }) => (
  <Link to={to} smooth={true} duration={500} offset={-70}>
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
  </Link>
)

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  
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
                <NavButton key={item} to={item.toLowerCase()}>
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
                    <Link
                      key={item}
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={onClose}
                    >
                      <Button variant="ghost" w="full">
                        {item}
                      </Button>
                    </Link>
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