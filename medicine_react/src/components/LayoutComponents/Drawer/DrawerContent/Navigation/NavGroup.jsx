import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// material-ui
import { Box, List, Typography } from '@mui/material';

// project import
import { FormattedMessage } from 'react-intl';
import NavItem from './NavItem';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

function NavGroup({ item }) {
  const { drawerOpen } = useSelector((state) => state.layout);

  const navCollapse = item.children?.map((menuItem) => {
    switch (menuItem.type) {
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return (
    <List
      subheader={
        item.id
        && drawerOpen && (
          <Box sx={{ pl: 3, mb: 1.5 }}>
            <Typography variant="subtitle2" color="secondary.contrastText">
              <FormattedMessage id={`navigation.${item.id}`} />
            </Typography>
          </Box>
        )
      }
      sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
    >
      {navCollapse}
    </List>
  );
}

NavGroup.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }).isRequired,
};

export default NavGroup;
