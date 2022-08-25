import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Drawer } from '@mui/material';

// project import
import { drawerWidth } from 'config';
import DrawerContent from './DrawerContent';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

function MainDrawer({ open, handleDrawerToggle }) {
  const theme = useTheme();

  // header content
  const drawerContent = useMemo(() => <DrawerContent />, []);

  return (
    <Drawer
      variant="persistent"
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          boxShadow: 'inherit',
          borderRight: `1px solid ${theme.palette.divider}`,
          color: 'primary.contrastText',
        },
        '.MuiDrawer-paper': {
          backgroundColor: 'drawer.background',
        },
      }}
    >
      {open && drawerContent}
    </Drawer>
  );
}

MainDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default MainDrawer;
