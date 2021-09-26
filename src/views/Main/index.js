import React from 'react'

import { Box, Header as HeaderGrommet } from 'grommet';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import BoxSelection from '../../components/BoxSelection';

import LogoMini from '../../assets/Logo_mini.jpeg'
import CEO from '../../assets/CEO.png'
import Delivery from '../../assets/Delivery.png'


const Main = () => {
  return(
    <>
      <Layout>
        <HeaderGrommet justify="center">
          <Header src={LogoMini}/>
        </HeaderGrommet>
        <Box fill responsive direction="COLUMN" align="center" >
          <BoxSelection 
            heading={`¿Eres un trabajador?`}
            paragraph={`Acceda a la sección del trabajador, para comenzar a usar nuestras app.`}
            labelButton={`Acceder`}
            href={`/client/login`}
            src={Delivery}  
          />
          <BoxSelection 
            heading={`¿Eres un administrador?`}
            paragraph={`Acceda a la sección de administración, y comience a trabajar.`}
            labelButton={`Acceder`}
            href={`/admin/login`}
            src={CEO}
          />
        </Box>
      </Layout>
    </>
  )
};

export default Main;