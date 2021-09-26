import React from 'react';
import { 
Box, 
TextInput, 
Button, 
Heading,
Markdown, 
} from 'grommet';

const FormSignin = ({ 
valueEmail, 
valuePass,
valueRepeat, 
onChangeEmail, 
onChangePass,
onChangeRepeat,
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
        <Heading>Regístrese</Heading>
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
        <TextInput 
          size="large"
          placeholder="Repita la contraseña" 
          type="password"
          value={valueRepeat}
          onChange={onChangeRepeat}
        />
        <Markdown>{text}</Markdown>
        <Button primary size="large" fill label="Aceptar"/>
      </Box>
    </>
  )
};

export default FormSignin;