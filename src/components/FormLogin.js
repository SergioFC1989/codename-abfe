import React from 'react';
import { 
Box, 
TextInput, 
Button, 
Heading,
Markdown, 
} from 'grommet';

const FormLogin = ({ 
valueEmail, 
valuePass, 
onChangeEmail, 
onChangePass,
text }) => {
  return(
    <>
      <Box 
        gap="large"
        pad="medium"
        align="center"
        width="large"
        background="#FCFDFD"
        round="medium"
        fill="vertical"
        animation="slideUp"
      >
        <Heading>Inicie Sesión</Heading>
        <TextInput 
          size="large"
          placeholder="Correo electrónico" 
          type="email"
          value={valueEmail}
          onChange={onChangeEmail}
        />
        <TextInput 
          size="large"
          placeholder="Contraseña" 
          type="password"
          value={valuePass}
          onChange={onChangePass}
        />
        <Markdown>{text}</Markdown>
        <Button primary size="large" fill label="Aceptar"/>
      </Box>
    </>
  )
};

export default FormLogin;