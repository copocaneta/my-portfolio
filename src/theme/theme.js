import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#121212' : '#ffffff',
        color: props.colorMode === 'dark' ? '#FFFFFF' : '#121212',
      },
    }),
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  colors: {
    brand: {
      primary: '#6B46C1',
      secondary: '#9F7AEA',
      accent: '#B794F4',
    },
  },
});

export default theme; 