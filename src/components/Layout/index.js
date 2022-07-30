import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
  return (
    <Grid
      templateColumns="68px 1fr"
      maxW={'100%'}
      width={'100%'}
      height={'100%'}
    >
      {/* <div className="App"> */}
      <Sidebar />
      <GridItem className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags"></span>
        &lt;/body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </GridItem>
      {/* </div> */}
    </Grid>
  );
};

export default Layout;
