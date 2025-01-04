import { Box, Container, Heading, Text, VStack, HStack, Link, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaStackOverflow, FaDiscord } from 'react-icons/fa'

export default function Connect() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/copocaneta/',
      icon: FaGithub,
      color: 'gray.100'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thiago-bernardi/',
      icon: FaLinkedin,
      color: '#0A66C2'
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/8754987/thiago-bernardi/',
      icon: FaStackOverflow,
      color: '#F48024'
    },
    {
      name: 'Discord',
      url: 'https://discordapp.com/users/724435328823197757/',
      icon: FaDiscord,
      color: '#5865F2'
    }
  ]

  return (
    <Box
      as="section"
      py={20}
      id="connect"
    >
      <Container maxW="container.xl">
        <VStack spacing={8} align="center">
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl">
              Let's Connect
            </Heading>
            <Text fontSize="lg" maxW="600px">
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects, ideas, or opportunities.
            </Text>
          </VStack>

          <HStack spacing={6} pt={4}>
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                isExternal
                _hover={{ transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                <Icon
                  as={social.icon}
                  boxSize={8}
                  color={social.color}
                  _hover={{ color: 'purple.400' }}
                  transition="all 0.2s"
                />
              </Link>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
} 