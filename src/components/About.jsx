import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, useColorModeValue } from '@chakra-ui/react'
import { FaGuitar, FaBook, FaDumbbell } from 'react-icons/fa'
import { GiKimono } from 'react-icons/gi'
import { MdPets } from 'react-icons/md'

const InterestCard = ({ icon, title }) => (
  <VStack
    p={5}
    bg="whiteAlpha.100"
    borderRadius="lg"
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', bg: 'whiteAlpha.200' }}
    align="center"
    textAlign="center"
    width="100%"
  >
    <Icon as={icon} w={10} h={10} color="brand.primary" />
    <Text fontWeight="bold" textAlign="center">{title}</Text>
  </VStack>
)

export default function About() {
  const textColor = useColorModeValue('gray.800', 'white')
  
  const interests = [
    { icon: GiKimono, title: 'Jiu-jitsu' },
    { icon: FaGuitar, title: 'Electric Guitar' },
    { icon: MdPets, title: 'Dogs & Cats' },
    { icon: FaDumbbell, title: 'Fitness' },
    { icon: FaBook, title: 'Tolkien Books' },
  ]

  return (
    <Box
      as="section"
      py={20}
      id="about"
    >
      <Container maxW="container.xl">
        <VStack spacing={8} align="start">
          <Heading as="h2" size="xl" color={textColor}>
            About Me
          </Heading>

          <Text fontSize="lg" lineHeight="tall" color={textColor}>
            With over 20 years of experience as a software engineer, I currently serve as an 
            Engineering Manager at Bain and Company. My career has been defined by a passion 
            for building scalable systems, mentoring teams, and delivering high-performance 
            software. When I'm not coding or leading teams, I enjoy jiu-jitsu, traveling, 
            and reading Tolkien books.
          </Text>

          <Box w="100%" pt={8}>
            <Heading 
              size="xl"
              color={textColor} 
              textAlign="left"
              w="100%" 
              mb={6}
            >
              Things I love
            </Heading>
            
            <SimpleGrid 
              columns={{ base: 2, md: 3, lg: 5 }} 
              spacing={6}
              justifyItems="center"
              alignItems="center"
            >
              {interests.map((interest, index) => (
                <InterestCard key={index} {...interest} />
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
} 