import { Box, Container, Heading, SimpleGrid, VStack, Text, Image, Button } from '@chakra-ui/react'

const BlogCard = ({ title, description, imageUrl, readTime }) => (
  <VStack
    bg="whiteAlpha.100"
    borderRadius="lg"
    overflow="hidden"
    align="start"
    _hover={{ bg: 'whiteAlpha.200' }}
  >
    <Box 
      w="100%" 
      h="200px"
      overflow="hidden"
    >
      <Image
        src={imageUrl}
        alt={title}
        w="100%"
        h="100%"
        objectFit="cover"
        loading="lazy"
      />
    </Box>
    <VStack p={6} align="start" spacing={3}>
      <Heading size="md">{title}</Heading>
      <Text color="gray.400" fontSize="sm">{readTime} min read</Text>
      <Text noOfLines={3}>{description}</Text>
      <Button variant="link" colorScheme="purple">
        Read More →
      </Button>
    </VStack>
  </VStack>
)

export default function Blog() {
  const posts = [
    {
      title: 'System Design Principles for Scalability',
      description: "Learn the key principles behind designing systems that can scale effectively. We'll explore microservices, load balancing, and database optimization strategies.",
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&h=169&q=60',
      readTime: 8
    },
    {
      title: 'Kafka in Event-Driven Architectures',
      description: 'Exploring the role of Apache Kafka in modern event-driven architectures...',
      imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=300&h=169&q=60',
      readTime: 10
    },
    {
      title: 'Engineering Management Tips for Growing Teams',
      description: 'Essential strategies and practices for engineering managers leading growing teams. Focus on communication, delegation, and team empowerment.',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&h=169&q=60',
      readTime: 6
    }
  ]

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

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
            {posts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </SimpleGrid>

          <Button size="lg" colorScheme="purple" variant="outline">
            View All Posts
          </Button>
        </VStack>
      </Container>
    </Box>
  )
} 