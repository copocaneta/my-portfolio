import { Box, Container, Heading, VStack, Text, HStack, IconButton, Link } from '@chakra-ui/react'
import { FaDiscord, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'

const SocialButton = ({ icon, label, href }) => (
  <IconButton
    as={Link}
    href={href}
    target="_blank"
    aria-label={label}
    icon={icon}
    size="lg"
    fontSize="24px"
    colorScheme="purple"
    variant="ghost"
    isRound
    _hover={{
      transform: 'translateY(-2px)',
      bg: 'whiteAlpha.200'
    }}
  />
)

export default function Connect() {
  const socials = [
    {
      icon: <FaDiscord />,
      label: 'Discord',
      href: 'YOUR_DISCORD_LINK'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/YourUsername'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/YourUsername'
    },
    {
      icon: <FaStackOverflow />,
      label: 'Stack Overflow',
      href: 'https://stackoverflow.com/users/YourUserId'
    }
  ]

  return (
    <Box
      as="section"
      py={20}
      id="connect"
    >
      <Container maxW="container.xl">
        <VStack spacing={8} textAlign="center">
          <Heading as="h2" size="xl">
            Let's Connect
          </Heading>
          
          <Text fontSize="lg" maxW="600px">
            I'd love to connect! Join me on Discord, or follow me on these platforms:
          </Text>

          <HStack spacing={6} pt={4}>
            {socials.map((social, index) => (
              <SocialButton key={index} {...social} />
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
} 