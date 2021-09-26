import React, { useState } from 'react';

import Layout from '../../../components/Layout';
import Header from '../../../components/Header';

import LogoMini from '../../../assets/Logo_mini.jpeg';
import FormSignin from '../../../components/FormSignin';

const Signin = () =>{
  return(
    <>
      <Layout>
        <Header src={LogoMini} />
        <FormSignin  
          text={`Si ya está registrado, inicie [sesión](/admin/login)`}     
        />
      </Layout>
    </>
  )
};

export default Signin;