import { Box, Container, Heading, Text, Button, Stack, VStack } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useFrame } from '@react-three/fiber'

function Model() {
  const { scene } = useGLTF('/test.glb')
  const modelRef = useRef()
  
  const rotationSpeed = useRef(2)
  
  useFrame((state, delta) => {
    if (rotationSpeed.current > 0) {
      modelRef.current.rotation.y += delta * rotationSpeed.current
      rotationSpeed.current *= 0.98
    }
  })
  
  return <primitive ref={modelRef} object={scene} scale={5} position={[0, 0.5, 0]} />
}

function ModelCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 45 }}
      style={{ height: '500px' }}
    >
      <ambientLight intensity={5} />
      <directionalLight position={[5, 5, 5]} intensity={8} castShadow />
      <directionalLight position={[-5, 5, 5]} intensity={8} castShadow />
      <directionalLight position={[0, 5, -5]} intensity={6} castShadow />
      <pointLight position={[0, 3, 0]} intensity={5} />
      <pointLight position={[0, -3, 0]} intensity={4} />
      <pointLight position={[3, 0, 0]} intensity={4} />
      <pointLight position={[-3, 0, 0]} intensity={4} />
      <pointLight position={[0, 0, 3]} intensity={4} />
      <pointLight position={[0, 0, -3]} intensity={4} />
      <spotLight
        position={[0, 5, 5]}
        angle={0.7}
        penumbra={1}
        intensity={6}
        castShadow
      />
      <spotLight
        position={[0, 0, 5]}
        angle={0.5}
        penumbra={1}
        intensity={6}
        castShadow
      />
      
      <Suspense fallback={null}>
        <Model />
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
    </Canvas>
  )
}

export default function Hero() {
  return (
    <Box
      as="section"
      h="100vh"
      display="flex"
      alignItems="center"
      pt="70px"
    >
      <Container maxW="container.xl">
        <Stack 
          spacing={0}
          alignItems="center" 
          textAlign="center"
          h="calc(100vh - 70px)"
          justify="space-between"
          py={2}
        >
          <VStack spacing={2} flex="0.6">
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              lineHeight="1.2"
            >
              Hi, I'm Thiago Bernardi —
              <br />
              <Text as="span" color="brand.primary">
                an Engineering Manager, Mentor, and Tech Enthusiast
              </Text>
            </Heading>

            <Text fontSize="xl" maxW="800px">
              Passionate about crafting scalable systems and empowering teams to deliver impactful solutions.
            </Text>
          </VStack>

          <Box 
            w="100%" 
            h={{ base: "280px", md: "380px" }}
            flex="2.5"
            mt="-4rem"
          >
            <ModelCanvas />
          </Box>

          <Stack 
            direction={{ base: 'column', md: 'row' }} 
            spacing={4}
            flex="0.4"
            w="100%"
            justify="center"
            mt="-3rem"
          >
            <Link to="expertise" smooth={true} duration={500} offset={-70}>
              <Button size="lg" colorScheme="purple">
                Explore My Expertise
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              colorScheme="purple"
              as="a"
              href="YOUR_DISCORD_LINK"
              target="_blank"
            >
              Join Me on Discord
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
} 