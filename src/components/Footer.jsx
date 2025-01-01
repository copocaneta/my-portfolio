import { Box, Container, Stack, Text, HStack, IconButton, Link } from '@chakra-ui/react'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

export default function Footer() {
  const sections = ['About', 'Expertise', 'Blog', 'Connect']
  const socials = [
    {
      icon: <FaDiscord />,
      href: 'YOUR_DISCORD_LINK'
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/YourUsername'
    },
    {
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/YourUsername'
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
          <Text>© 2025 Thiago Bernardi. All rights reserved.</Text>
          
          <HStack spacing={6}>
            {sections.map((section) => (
              <ScrollLink
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                cursor="pointer"
              >
                <Text
                  fontSize="sm"
                  _hover={{ color: 'brand.primary' }}
                  transition="color 0.2s"
                >
                  {section}
                </Text>
              </ScrollLink>
            ))}
          </HStack>

          <HStack spacing={4}>
            {socials.map((social, index) => (
              <IconButton
                key={index}
                as={Link}
                href={social.href}
                target="_blank"
                icon={social.icon}
                size="sm"
                variant="ghost"
                color="gray.400"
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