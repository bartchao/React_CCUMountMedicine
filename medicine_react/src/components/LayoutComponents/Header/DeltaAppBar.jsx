import PropTypes from 'prop-types';
// material-ui
import { styled } from '@mui/material/styles';
import { useMediaQuery, Typography, AppBar, Toolbar } from '@mui/material';
import { FormattedMessage } from 'react-intl';

// project import
import { drawerWidth } from 'config';
import { LogoSection } from 'components/LayoutComponents/Logo/DeltaLogo';
import DrawerButton from './DrawerButton';
// ==============================|| HEADER - APP BAR STYLED ||============================== //

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  position: 'fixed',
  elevation: 0,
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.customShadows.z1,
}));
function HeaderContent({ children }) {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <>
      <LogoSection />
      <Typography variant={matchesXs ? 'h3' : 'h2'} component="h1" noWrap sx={{ width: '100%' }}>
        <FormattedMessage id="common.title" />
      </Typography>
      {children}
    </>
  );
}
function DeltaAppBar({ handleDrawerToggle, ...props }) {
  const { open, showDrawer, children } = props;

  return (
    <AppBarStyled open={open}>
      <Toolbar>
        {showDrawer && <DrawerButton open={open} handleDrawerToggle={handleDrawerToggle} />}
        <HeaderContent>{children}</HeaderContent>
      </Toolbar>
    </AppBarStyled>
  );
}

export default DeltaAppBar;
DeltaAppBar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  open: PropTypes.bool,
  showDrawer: PropTypes.bool,
  children: PropTypes.node,
};
HeaderContent.propTypes = {
  children: PropTypes.node,
};
