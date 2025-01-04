import { Box, useColorModeValue } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {
  const bg = useColorModeValue('white', '#1A202C')
  
  return (
    <Router>
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
        <Routes>
          <Route path="/" element={
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
          } />
          <Route path="/blog/:slug" element={
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
                <BlogPost />
                <Footer />
              </Box>
            </Box>
          } />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
