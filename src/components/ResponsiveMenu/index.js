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
  IconButton,
  Input,
  useDisclosure,
  useTheme,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

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
          h={'74px'}
          mt={'90px'}
          background={theme.colors.navBarBgLight}
        >
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ResponsiveMenu;
