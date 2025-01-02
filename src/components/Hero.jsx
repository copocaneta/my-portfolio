import { Box, Container, Heading, Text, Button, Stack, VStack, useColorModeValue } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useFrame } from '@react-three/fiber'

function Model() {
  const { scene } = useGLTF('/test.glb')
  const modelRef = useRef()
  
  const rotationSpeed = useRef(4)
  const MIN_SPEED = 0.2
  
  useFrame((state, delta) => {
    if (rotationSpeed.current > MIN_SPEED) {
      rotationSpeed.current *= 0.97
      if (rotationSpeed.current < MIN_SPEED) {
        rotationSpeed.current = MIN_SPEED
      }
    }
    modelRef.current.rotation.y += delta * rotationSpeed.current
  })
  
  return <primitive ref={modelRef} object={scene} scale={5} position={[0, 0, 0]} />
}

function ModelCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 2, 8], fov: 45 }}
      style={{ height: '500px' }}
    >
      <ambientLight intensity={6} />
      <directionalLight position={[5, 5, 5]} intensity={8} castShadow />
      <directionalLight position={[-5, 5, 5]} intensity={8} castShadow />
      <directionalLight position={[0, 5, -5]} intensity={8} castShadow />
      
      <pointLight position={[0, 3, 0]} intensity={6} />
      <pointLight position={[3, 3, 3]} intensity={5} />
      <pointLight position={[-3, 3, 3]} intensity={5} />
      <pointLight position={[3, 3, -3]} intensity={5} />
      <pointLight position={[-3, 3, -3]} intensity={5} />
      
      <pointLight position={[4, 0, 0]} intensity={5} />
      <pointLight position={[-4, 0, 0]} intensity={5} />
      <pointLight position={[0, 0, 4]} intensity={5} />
      <pointLight position={[0, 0, -4]} intensity={5} />
      
      <pointLight position={[0, -1, 3]} intensity={6} />
      <pointLight position={[0, -1, -3]} intensity={6} />
      <pointLight position={[3, -1, 0]} intensity={6} />
      <pointLight position={[-3, -1, 0]} intensity={6} />
      
      <pointLight position={[3, -1, 3]} intensity={5} />
      <pointLight position={[-3, -1, 3]} intensity={5} />
      <pointLight position={[3, -1, -3]} intensity={5} />
      <pointLight position={[-3, -1, -3]} intensity={5} />
      
      <pointLight position={[2, 1, 2]} intensity={4} />
      <pointLight position={[-2, 1, 2]} intensity={4} />
      <pointLight position={[2, 1, -2]} intensity={4} />
      <pointLight position={[-2, 1, -2]} intensity={4} />
      
      <spotLight
        position={[0, 5, 5]}
        angle={0.7}
        penumbra={1}
        intensity={8}
        castShadow
      />
      <spotLight
        position={[0, 0, 5]}
        angle={0.6}
        penumbra={1}
        intensity={8}
        castShadow
      />
      
      <spotLight
        position={[5, 2, 0]}
        angle={0.6}
        penumbra={1}
        intensity={7}
        castShadow
      />
      <spotLight
        position={[-5, 2, 0]}
        angle={0.6}
        penumbra={1}
        intensity={7}
        castShadow
      />
      <spotLight
        position={[0, -1, 4]}
        angle={0.6}
        penumbra={1}
        intensity={7}
        castShadow
      />
      <spotLight
        position={[0, -1, -4]}
        angle={0.6}
        penumbra={1}
        intensity={7}
        castShadow
      />
      
      <Suspense fallback={null}>
        <Model />
        <OrbitControls
          enableRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          enablePan={false}
          rotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Suspense>
    </Canvas>
  )
}

export default function Hero() {
  const textColor = useColorModeValue('gray.800', 'white')
  
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
          <VStack spacing={1} flex={{ base: "0.5", md: "0.6" }}>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="900"
              lineHeight="1.1"
              color={textColor}
              letterSpacing="-0.03em"
              mb={2}
              whiteSpace="nowrap"
            >
              Hi, I'm{' '}
              <Text
                as="span"
                position="relative"
                bgGradient="linear(to-r, brand.primary, brand.accent, brand.secondary)"
                bgClip="text"
                bgSize="200% auto"
                animation="shine 3s ease-in-out infinite"
                fontFamily="'Orbitron', sans-serif"
                display="inline-block"
                sx={{
                  '@keyframes shine': {
                    'from': { backgroundPosition: '0% center' },
                    'to': { backgroundPosition: '200% center' }
                  }
                }}
              >
                Thiago Bernardi
              </Text>
            </Heading>

            <Box
              position="relative"
              p={3}
              mb={2}
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 'lg',
                padding: '2px',
                background: 'linear-gradient(45deg, brand.primary, brand.accent)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
              }}
            >
              <Heading
                fontSize={{ base: "lg", md: "2xl" }}
                fontWeight="500"
                color="whiteAlpha.900"
                letterSpacing="0.05em"
                fontFamily="'Inter', sans-serif"
                textTransform="uppercase"
              >
                Engineering Manager
                <br />
                <Text 
                  as="span" 
                  bgGradient="linear(to-r, brand.primary, brand.accent)"
                  bgClip="text"
                  fontWeight="800"
                >
                  Mentor & Tech Enthusiast
                </Text>
              </Heading>
            </Box>

            <Text 
              fontSize={{ base: "sm", md: "md" }}
              maxW="600px" 
              color={textColor}
              opacity={0.9}
              letterSpacing="0.02em"
              lineHeight="1.6"
              fontWeight="500"
              position="relative"
              mt={1}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, brand.primary, transparent)',
              }}
            >
              Passionate about crafting scalable systems and empowering teams to deliver impactful solutions.
            </Text>
          </VStack>

          <Box 
            w="100%" 
            h={{ base: "200px", md: "380px" }}
            flex={{ base: "1.5", md: "2.5" }}
            mt="-4rem"
          >
            <ModelCanvas />
          </Box>

          <Stack 
            direction={{ base: 'column', md: 'row' }} 
            spacing={4}
            flex={{ base: "0.5", md: "0.4" }}
            w="100%"
            justify="center"
            mt={{ base: "-2rem", md: "-4rem" }}
            mb={{ base: 4, md: 0 }}
          >
            <Link to="expertise" smooth={true} duration={500} offset={-70}>
              <Button size="md" colorScheme="purple" w={{ base: "full", md: "auto" }}>
                Explore My Expertise
              </Button>
            </Link>
            <Button
              size="md"
              variant="outline"
              colorScheme="purple"
              as="a"
              href="YOUR_DISCORD_LINK"
              target="_blank"
              w={{ base: "full", md: "auto" }}
            >
              Join Me on Discord
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
} 