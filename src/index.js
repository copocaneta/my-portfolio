import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      root: {
        bg: 'gray.400',
      },
      body: {
        // bg: this.colors.backgroundLight,
        color: 'white',
        height: '100%',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  colors: {
    primaryColorDark: '#ffd700',
    primaryColorLight: '#416788',
    secondaryColorDark: '#4d148c',
    secondaryColorLight: '#4d148c',
    altColorLight: '#ff6600',
    backgroundLight: '#ebf0fa',
    backgroundDark: '#022c43',
    headingColorDark: '#fff',
    headingColorLight: '#333',
    textColorDark: '#fff',
    textColorLight: '#000',
    navBarBgDark: '#181818',
    navBarBgLight: '#4d148c',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ChakraProvider theme={theme}>
    <Container
      maxW={'100%'}
      width={'100%'}
      height={'100vh'}
      m={0}
      p={0}
      overflow={'hidden'}
      background={'red.50'}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Container>
  </ChakraProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
