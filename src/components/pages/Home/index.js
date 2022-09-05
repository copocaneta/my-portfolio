import { Link } from 'react-router-dom';
import './index.scss';
import { Box, Button, Grid, GridItem, Text, useTheme } from '@chakra-ui/react';
import HomeHeadingText from '../../HomeHeadingText';
import HomePicture from '../../HomePicture';
import CodeBrackets from '../../CodeBrackets';
import PageLoader from '../../PageLoader';
import { motion } from 'framer-motion';
import { pageVariants } from '../../../utils/page-transition';
import mycv from '../../../assets/cv/resume_thiago_bernardi.pdf';

const Home = () => {
  const theme = useTheme();

  return (
    <Box display={'flex'} justifyContent={'center'} w={'100%'} h={'100%'}>
      <Grid
        as={motion.div}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="out"
        className="container home-page"
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        w={'100%'}
        mx={{ base: '20px', lg: '50px' }}
      >
        <GridItem
          className="text-zone"
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          zIndex={999999}
        >
          <HomeHeadingText />

          <Text
            marginTop={'10px'}
            as="h2"
            display={{ base: 'none', lg: 'block' }}
          >
            Fullstack JavaScript Developer
          </Text>

          <Box
            display={'flex'}
            gap={'10px'}
            marginTop={'25px'}
            flexDir={{ base: 'column', lg: 'row' }}
          >
            <Button
              as={Link}
              to="/contact"
              className="regular-button"
              border={'none'}
              p={'18px 18px'}
              background={theme.colors.altColorLight}
              color={'white'}
              _hover={{
                color: 'white',
                textDecoration: 'none',
                background: '#BE6022;',
              }}
            >
              CONTACT ME
            </Button>
            <Button
              as={'a'}
              download={'My Resume'}
              href={mycv}
              cursor={'pointer'}
              className="regular-button"
              border={'none'}
              p={'18px 18px'}
              background={theme.colors.altColorLight}
              color={'white'}
              _hover={{
                color: 'white',
                textDecoration: 'none',
                background: '#BE6022;',
              }}
            >
              DOWNLOAD CV
            </Button>
          </Box>
        </GridItem>
        <GridItem
          zIndex={999998}
          position={{ base: 'absolute', md: 'unset' }}
          display={'flex'}
          width={'100%'}
          height={{ base: '80vh', md: '100%' }}
          justifyContent={{ base: 'center', md: 'unset' }}
          className={'image-zone'}
        >
          <CodeBrackets />
          <HomePicture />
        </GridItem>
      </Grid>
      <PageLoader />
    </Box>
  );
};

export default Home;
