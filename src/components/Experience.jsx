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
      role: 'Expert Manager, Software Engineering',
      company: 'Bain & Company',
      period: 'Sep 2024 - Present',
      description: 'Leading engineering teams in delivering innovative solutions, implementing best practices, and fostering a culture of continuous improvement and technical excellence.'
    },
    {
      role: 'Lead Software Engineer',
      company: 'Cykel AI',
      period: 'Jan 2023 - Sep 2024',
      description: 'Led development of AI-powered solutions and scalable architectures, while mentoring team members and establishing robust engineering practices.'
    },
    {
      role: 'Tech Lead & Senior Full Stack Developer',
      company: 'Crowdform',
      period: 'Nov 2021 - Sep 2024',
      description: 'Progressed from Full Stack Developer to Tech Lead, leading multiple development teams, architecting solutions, and implementing best practices. Managed complex projects and mentored junior developers while maintaining hands-on development.'
    },
    {
      role: 'Senior DevOps Engineer',
      company: 'Hosting Machine',
      period: 'Nov 2010 - Sep 2021',
      description: 'Spearheaded infrastructure automation initiatives over a decade, implementing CI/CD pipelines, and optimizing deployment processes for large-scale systems. Managed critical infrastructure and improved system reliability.'
    },
    {
      role: 'Senior Systems and Web Analyst',
      company: 'HP',
      period: 'Apr 2009 - Jan 2011',
      description: 'Led frontend development efforts and DevOps initiatives, focusing on performance optimization and implementing client-specific solutions for enterprise-level applications.'
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
              Over 15 years of impactful contributions in software engineering and leadership
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