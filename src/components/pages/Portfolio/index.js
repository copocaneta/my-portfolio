import './index.scss';
import { projects } from '../../../constants';
import { Tilt } from 'react-tilt';
import { github } from '../../../assets';
import PageLoader from '../../PageLoader';
import { Box, Grid, GridItem, Text, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../../utils/page-transition';
import { fadeIn } from '../../../utils/motion';

const ProjectCard = ({
  idx,
  name,
  description,
  tags,
  image,
  source_code_link: sourceCodeLink,
}) => {
  return (
    <Flex
      as={motion.div}
      flexBasis={{ base: '100%', md: 'calc((100%/3) - 12px)' }}
      variants={fadeIn('up', 'spring', idx * 0.5, 0.75)}
    >
      <Tilt
        as={Box}
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        padding={5}
        rounded={'20px'}
        width={{ base: '200px' }}
      >
        <Box position={'relative'} height={'230px'}>
          <Image
            src={image}
            alt={name}
            width={'100%'}
            objectFit={'cover'}
            height={'100%'}
            rounded={'20px'}
          />
          <Flex
            position={'absolute'}
            top={'5px'}
            right={'5px'}
            width={'100%'}
            justifyContent={'flex-end'}
            className="card-img_hover"
          >
            <Flex
              onClick={() => window.open(sourceCodeLink, '_blank')}
              background={'black'}
              width={10}
              height={10}
              rounded={'full'}
              justifyContent={'center'}
              alignItems={'center'}
              cursor={'pointer'}
            >
              <Image src={github} alt="github" />
            </Flex>
          </Flex>
        </Box>
        <Box marginTop={5}>
          <Text as={'h3'} color={'white'} fontWeight={'bold'} fontSize={'24px'}>
            {name}
          </Text>
          <Text marginTop={2} fontSize={'14px'} color={'white'}>
            {description}
          </Text>
        </Box>
        <Flex marginTop={4} flexWrap={'wrap'} gap={2}>
          {tags.map((tag, idx) => (
            <Text key={tag.name} color={tag.color} fontSize={'14px'}>
              #{tag.name}
            </Text>
          ))}
        </Flex>
      </Tilt>
    </Flex>
  );
};

const Portfolio = () => {
  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'center'}
        w={'100%'}
        h={'100%'}
        mt={{ base: '30px', lg: 'unset' }}
      >
        <Grid
          as={motion.div}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="out"
          templateColumns={'1fr'}
          w={'80%'}
          mx={'50px'}
          className="container portfolio-page"
        >
          <GridItem
            className="text-zone"
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Text
              as="h2"
              color={{
                base: 'white',
              }}
              fontSize={'18px'}
              fontWeight={'thin'}
            >
              Some of my work
            </Text>
            <Text
              as="h1"
              color={{
                base: 'white',
              }}
              fontSize={'48px'}
              fontWeight={'extrabold'}
            >
              Projects
            </Text>
            <Text as={'p'}>
              This is where I will list some of my most recent work. Not
              everything I did will be here since most is under non disclosure
              agreements with the companies I work for or have worked in the
              past.
            </Text>
            <Flex marginTop={'20px'} gap={7} flexWrap={'wrap'}>
              {projects.map((project, idx) => (
                <ProjectCard key={`project-${idx}`} {...project} idx={idx} />
              ))}
            </Flex>
          </GridItem>
        </Grid>
        <PageLoader />
      </Box>
    </>
  );
};

export default Portfolio;
