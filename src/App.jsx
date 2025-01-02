import { Box, useColorModeValue } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Connect from './components/Connect'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
  const bg = useColorModeValue('white', '#1A202C')
  
  useEffect(() => {
    const html = document.documentElement
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <Box 
      width="100%" 
      minH="100vh"
      bg={bg}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          borderRadius: '24px',
        },
      }}
    >
      <Navbar />
      <Box 
        width="100%" 
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box 
          width="100%" 
          maxW="736px"
          position="relative"
        >
          <Hero />
          <About />
          <Expertise />
          <Experience />
          <Blog />
          <Connect />
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default App
