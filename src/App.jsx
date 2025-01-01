import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Blog />
      <Connect />
      <Footer />
    </Box>
  )
}

export default App
