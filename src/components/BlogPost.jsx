import { Box, Container, Heading, Text, Image, VStack, Button, useColorModeValue } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getAllPosts, parseMarkdown } from '../utils/blogUtils'

export default function BlogPost() {
  const [post, setPost] = useState(null)
  const [content, setContent] = useState('')
  const { slug } = useParams()
  const navigate = useNavigate()
  const textColor = useColorModeValue('gray.800', 'white')

  useEffect(() => {
    async function loadPost() {
      const posts = await getAllPosts()
      const foundPost = posts.find(p => p.slug === slug)
      if (foundPost) {
        setPost(foundPost)
        setContent(parseMarkdown(foundPost.content))
      } else {
        navigate('/#blog')
      }
    }
    loadPost()
  }, [slug, navigate])

  if (!post) return null

  return (
    <Box as="article" py={20}>
      <Container maxW="container.md">
        <VStack spacing={8} align="stretch">
          <Button
            leftIcon={<ArrowBackIcon />}
            variant="ghost"
            alignSelf="start"
            onClick={() => navigate('/#blog')}
          >
            Back to blog posts list
          </Button>

          <Box
            w="100%"
            h={{ base: "200px", md: "400px" }}
            overflow="hidden"
            borderRadius="lg"
          >
            <Image
              src={`${post.image}?auto=format&fit=crop&w=1200&h=600&q=80`}
              alt={post.title}
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>

          <VStack spacing={4} align="stretch">
            <Heading as="h1" size="2xl" color={textColor}>
              {post.title}
            </Heading>
            
            <Text color="gray.500" fontSize="md">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </Text>

            <Box
              className="blog-content"
              color={textColor}
              sx={{
                'h2': {
                  fontSize: '2xl',
                  fontWeight: 'bold',
                  mt: 8,
                  mb: 4
                },
                'p': {
                  mb: 4,
                  lineHeight: 1.8
                },
                'ul, ol': {
                  ml: 6,
                  mb: 4
                },
                'li': {
                  mb: 2
                },
                'strong': {
                  color: useColorModeValue('purple.600', 'purple.300')
                }
              }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
} 