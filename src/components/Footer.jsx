import { Box, Container, Stack, Text, HStack, IconButton, Link } from '@chakra-ui/react'
import { FaDiscord, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'

export default function Footer() {
  const socials = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/copocaneta/',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/thiago-bernardi/',
      label: 'LinkedIn'
    },
    {
      icon: <FaStackOverflow />,
      href: 'https://stackoverflow.com/users/8754987/thiago-bernardi/',
      label: 'Stack Overflow'
    },
    {
      icon: <FaDiscord />,
      href: 'https://discordapp.com/users/724435328823197757/',
      label: 'Discord'
    }
  ]

  return (
    <Box
      as="footer"
      py={10}
      bg="whiteAlpha.50"
      borderTop="1px"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          spacing={4}
        >
          <Text fontSize="sm">© 2025 Thiago Bernardi. All rights reserved.</Text>

          <HStack spacing={4}>
            {socials.map((social) => (
              <IconButton
                key={social.label}
                as={Link}
                href={social.href}
                target="_blank"
                icon={social.icon}
                size="sm"
                variant="ghost"
                color="gray.400"
                aria-label={social.label}
                _hover={{
                  color: 'white',
                  transform: 'translateY(-2px)'
                }}
              />
            ))}
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
} 