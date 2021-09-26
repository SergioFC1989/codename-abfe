import React from 'react'
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Layout = ({ children }) => (
  <>
    <Box

      direction="column"
      align="center" 
      margin="xxsmall"
      pad="xxsmall"
      rounded="medium"
      gap="xsmall"
      flex={true}
      fill={true}
    >
      {children}
    </Box>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;