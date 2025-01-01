import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Button } from '@chakra-ui/react'
import { FaUsers, FaCode, FaServer, FaRocket } from 'react-icons/fa'
import { Link } from 'react-scroll'

const ExpertiseCard = ({ icon, title, description }) => (
  <VStack
    p={8}
    bg="whiteAlpha.100"
    borderRadius="lg"
    align="start"
    spacing={4}
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', bg: 'whiteAlpha.200' }}
  >
    <Icon as={icon} w={8} h={8} color="brand.primary" />
    <Heading size="md">{title}</Heading>
    <Text>{description}</Text>
  </VStack>
)

export default function Expertise() {
  const areas = [
    {
      icon: FaUsers,
      title: 'Leadership and Mentorship',
      description: 'I foster collaboration and growth within teams, empowering engineers to excel.'
    },
    {
      icon: FaServer,
      title: 'System Design',
      description: 'I specialize in designing reliable, scalable architectures tailored to real-world demands.'
    },
    {
      icon: FaCode,
      title: 'Full Stack Web Development',
      description: 'Crafting seamless, performant user experiences using modern web technologies.'
    },
    {
      icon: FaRocket,
      title: 'DevOps',
      description: 'Streamlining workflows with automated CI/CD pipelines and efficient infrastructure management.'
    }
  ]

  return (
    <Box
      as="section"
      py={20}
      id="expertise"
      bg="whiteAlpha.50"
    >
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl">
              What I Bring to the Table
            </Heading>
            <Text fontSize="lg" maxW="800px">
              I bring a wealth of experience in software engineering, leadership, and system design. 
              My focus is on delivering impactful solutions while empowering teams to innovate and grow.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            {areas.map((area, index) => (
              <ExpertiseCard key={index} {...area} />
            ))}
          </SimpleGrid>

          <Link to="experience" smooth={true} duration={500} offset={-70}>
            <Button size="lg" colorScheme="purple">
              Learn More About My Journey
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  )
} 