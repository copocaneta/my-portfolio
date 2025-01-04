import { useState, useEffect } from 'react'
import { Box, Container, Heading, SimpleGrid, VStack, Text, Image, Button, Spinner } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { getAllPosts } from '../utils/blogUtils'

const BlogCard = ({ title, date, image, excerpt, slug, onClick }) => (
  <VStack
    as="article"
    bg="whiteAlpha.100"
    borderRadius="lg"
    overflow="hidden"
    align="start"
    cursor="pointer"
    transition="all 0.2s"
    _hover={{ 
      bg: 'whiteAlpha.200',
      transform: 'translateY(-4px)'
    }}
    onClick={onClick}
  >
    <Box 
      w="100%" 
      h="200px"
      overflow="hidden"
    >
      <Image
        src={`${image}?auto=format&fit=crop&w=300&h=169&q=60`}
        alt={title}
        w="100%"
        h="100%"
        objectFit="cover"
        loading="lazy"
      />
    </Box>
    <VStack p={6} align="start" spacing={3} w="100%">
      <Heading size="md">{title}</Heading>
      <Text color="gray.400" fontSize="sm">
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </Text>
      <Text noOfLines={3}>{excerpt}</Text>
      <Text 
        color="purple.500" 
        fontWeight="500"
        _hover={{ color: 'purple.400' }}
      >
        Read More →
      </Text>
    </VStack>
  </VStack>
)

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function loadPosts() {
      try {
        const allPosts = await getAllPosts()
        setPosts(allPosts)
      } catch (error) {
        console.error('Error loading posts:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [])

  return (
    <Box
      as="section"
      py={20}
      id="blog"
      bg="whiteAlpha.50"
    >
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" size="xl">
              Insights and Reflections
            </Heading>
            <Text fontSize="lg" maxW="800px">
              Sharing knowledge and experiences from my journey in software engineering and leadership
            </Text>
          </VStack>

          {loading ? (
            <Spinner size="xl" color="purple.500" />
          ) : posts.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
              {posts.map((post) => (
                <BlogCard 
                  key={post.slug} 
                  {...post} 
                  onClick={() => navigate(`/blog/${post.slug}`)}
                />
              ))}
            </SimpleGrid>
          ) : (
            <Text>No posts found.</Text>
          )}

          {posts.length > 0 && (
            <Button size="lg" colorScheme="purple" variant="outline">
              View All Posts
            </Button>
          )}
        </VStack>
      </Container>
    </Box>
  )
} 