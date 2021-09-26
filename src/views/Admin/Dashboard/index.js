import React, { useState } from 'react';

import { 
Grid, 
Box, 
Avatar, 
Clock,
Text,  
} from 'grommet'

import Layout from '../../../components/Layout';

import LogoMini from '../../../assets/Logo_mini.jpeg';

const Dashboard = () =>{
  return(
    <>
      <Layout>
        <Grid
          rows={['small', 'large']}
          columns={['large', 'large']}
          gap="xsmall"
          areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'nav', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] },
          ]}
        >
          <Box align="center" fill gridArea="header" background="brand">
            <Box 
              align="end" 
              fill 
              margin="medium" 
              pad="small"
              gap="small"
            >
              <Avatar fit="cover" src={LogoMini} />
              <Clock size="large" type="digital" />
              <Text>Bienvenido Admnistrador</Text>
            </Box>
          </Box>
          <Box gridArea="nav" background="light-5" />
          <Box gridArea="main" background="light-2" />
        </Grid>
      </Layout>
    </>
  )
};

export default Dashboard;