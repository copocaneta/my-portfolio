import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#1A202C' : '#FFFFFF',
        color: props.colorMode === 'dark' ? '#FFFFFF' : '#1A202C',
      }
    })
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  colors: {
    brand: {
      primary: '#805AD5',
      secondary: '#9F7AEA',
      accent: '#B794F4',
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '736px',
        px: { base: '4', md: '6' },
      }
    }
  }
});

export default theme; 