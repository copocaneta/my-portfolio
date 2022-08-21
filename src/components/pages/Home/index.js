import { Link } from 'react-router-dom';
import './index.scss';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
  theme,
  useTheme,
} from '@chakra-ui/react';
import HomeHeadingText from '../../HomeHeadingText';
import HomePicture from '../../HomePicture';
import CodeBrackets from '../../CodeBrackets';
import PageLoader from '../../PageLoader';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../../utils/page-transition';

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
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
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
          <Text marginTop={'10px'} as="h2">
            Fullstack JavaScript Developer
          </Text>
          <Button
            as={Link}
            to="/contact"
            className="flat-button"
            p={'18px 18px'}
            background={theme.colors.altColorLight}
            color={'white'}
            _hover={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            CONTACT ME
          </Button>
        </GridItem>
        <GridItem
          zIndex={999998}
          position={{ base: 'absolute', lg: 'unset' }}
          display={'flex'}
          width={'100%'}
          height={{ base: '80vh', lg: '100%' }}
          justifyContent={{ base: 'center', lg: 'unset' }}
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
