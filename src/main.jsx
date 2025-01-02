import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './theme/theme'

// Import Google Fonts
const robotoFont = document.createElement('link');
robotoFont.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap';
robotoFont.rel = 'stylesheet';
document.head.appendChild(robotoFont);

// Add Orbitron font
const orbitronFont = document.createElement('link');
orbitronFont.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;900&display=swap';
orbitronFont.rel = 'stylesheet';
document.head.appendChild(orbitronFont);

// Add Inter font
const interFont = document.createElement('link');
interFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap';
interFont.rel = 'stylesheet';
document.head.appendChild(interFont);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>,
)
