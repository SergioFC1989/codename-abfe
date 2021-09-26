import React from 'react'

import { 
Avatar,
Box, 
Button, 
Heading, 
Image, 
Paragraph 
} from 'grommet'

const BoxSelection = ({ heading, paragraph, src, labelButton, href }) => {
  const handleOnClick = () => {};
  return(
    <>
      <Box
        round
        pad="medium"
        gap="medium"
        width="medium"
        margin="medium"
        background="#FCFDFD"
        align="center"
        border="all"
        animation="slideUp"
      >
        <Heading
          fill
          textAlign="center"  
          level="2" 
        >
          {heading}
        </Heading>
        <Paragraph fill textAlign="center">{paragraph}</Paragraph>
        <Box margin="small" height="small" width="small">
          <Image fit="cover" src={src} />
        </Box>
        <Button primary fill size="large" label={labelButton} href={href} onClick={handleOnClick}></Button>
      </Box>
    </>
  )
};

export default BoxSelection