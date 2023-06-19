import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Menu';
import './index.scss';

const Layout = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '68px 1fr' }}
      templateRows={{ base: '90px 1fr', lg: 'auto' }}
      maxW={'100%'}
      maxH={'100vh'}
      width={'100%'}
      height={'100%'}
      background={'#050816'}
    >
      {/* <div className="App"> */}
      <Sidebar id={'navbar-menu'} />
      <GridItem className="page">
        <Outlet />
      </GridItem>
      {/* </div> */}
    </Grid>
  );
};

export default Layout;
