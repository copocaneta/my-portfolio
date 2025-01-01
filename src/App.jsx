import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {
  const bg = useColorModeValue('white', '#1A202C')
  
  return (
    <Box 
      width="100%" 
      display="flex" 
      flexDirection="column" 
      alignItems="center"
      bg={bg}
    >
      <Box 
        width="100%" 
        maxW="736px"
        position="relative"
      >
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Blog />
        <Connect />
        <Footer />
      </Box>
    </Box>
  )
}

export default App
