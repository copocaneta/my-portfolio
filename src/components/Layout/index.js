import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '68px 1fr' }}
      templateRows={{ base: '100px 1fr', lg: 'auto' }}
      maxW={'100%'}
      width={'100%'}
      height={'100%'}
    >
      {/* <div className="App"> */}
      <Sidebar />
      <GridItem className="page" marginTop={{ base: '30px', lg: 'unset' }}>
        <Outlet />
      </GridItem>
      {/* </div> */}
    </Grid>
  );
};

export default Layout;
