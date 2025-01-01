import { Box, Container, Heading, VStack, Text, Stack, Circle, Flex } from '@chakra-ui/react'

const ExperienceItem = ({ role, company, period, description }) => (
  <Stack direction={{ base: 'column', md: 'row' }} spacing={4} w="100%">
    <Circle
      size="12px"
      bg="brand.primary"
      display={{ base: 'none', md: 'block' }}
      flexShrink={0}
      mt={2}
    />
    <VStack align="start" spacing={2}>
      <Heading size="md">{role}</Heading>
      <Text color="brand.secondary" fontWeight="bold">{company}</Text>
      <Text color="gray.500" fontSize="sm">{period}</Text>
      <Text>{description}</Text>
    </VStack>
  </Stack>
)

export default function Experience() {
  const experiences = [
    {
      role: 'Engineering Manager',
      company: 'Bain and Company',
      period: '2022 - Present',
      description: 'Leading engineering teams in delivering innovative solutions, implementing best practices, and fostering a culture of continuous improvement and technical excellence.'
    },
    {
      role: 'Tech Lead',
      company: 'Crowdform',
      period: '2020 - 2022',
      description: 'Mentored engineering teams, architected scalable solutions, and established robust development practices while driving technical initiatives.'
    },
    {
      role: 'Senior DevOps Engineer',
      company: 'HostMach',
      period: '2018 - 2020',
      description: 'Spearheaded infrastructure automation initiatives, implemented CI/CD pipelines, and optimized deployment processes for large-scale systems.'
    },
    {
      role: 'Senior Systems and Web Analyst',
      company: 'HP',
      period: '2015 - 2018',
      description: 'Led frontend development efforts and DevOps initiatives, focusing on performance optimization and implementing client-specific solutions.'
    }
  ]

  return (
    <Box
      as="section"
      py={20}
      id="experience"
    >
      <Container maxW="container.xl">
        <VStack spacing={12} align="start">
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              Experience Highlights
            </Heading>
            <Text fontSize="lg" color="gray.400">
              A journey of continuous growth and impact
            </Text>
          </VStack>

          <VStack spacing={8} w="100%" position="relative">
            {/* Vertical line for timeline */}
            <Box
              position="absolute"
              left="6px"
              top="0"
              bottom="0"
              width="1px"
              bg="whiteAlpha.200"
              display={{ base: 'none', md: 'block' }}
            />
            
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
} 