import React, { useState } from 'react';

import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import FormLogin from '../../../components/FormLogin';

import LogoMini from '../../../assets/Logo_mini.jpeg';

const Login = () =>{
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return(
    <>
      <Layout>
        <Header src={LogoMini} />
        <FormLogin 
          onChangeEmail={e => setEmail(e.target.value)} 
          onChangePass={e => setPass(e.target.value)}
          valueEmail={email} 
          valuePass={pass}
          text={`¿Aún no está registrado? [Regístrese](/admin/signin)`}
        />
      </Layout>
    </>
  )
};

export default Login;