import PropTypes from 'prop-types';

import { Box } from 'grommet';

const Layout = ({ children }) => (
  <>
    <Box 
      border
      direction="column" 
      justify="center"
      gap="xlarge"
      margin="medium"
      pad="medium"
      fill="vertical"
    >
      {children}
    </Box>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;