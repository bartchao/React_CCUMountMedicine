import PropTypes from 'prop-types';
// material-ui
import { IconButton } from '@mui/material';

// assets
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

function DrawerButton({ handleDrawerToggle, ...props }) {
  const { open } = props;
  const iconBackColor = 'grey.100';
  const iconBackColorOpen = 'grey.200';
  return (
    <IconButton
      disableRipple
      aria-label="open drawer"
      onClick={handleDrawerToggle}
      edge="start"
      color="secondary"
      sx={{
        color: 'text.primary',
        bgcolor: open ? iconBackColorOpen : iconBackColor,
        ml: { xs: 0, lg: -2 },
      }}
    >
      {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </IconButton>
  );
}
export default DrawerButton;

DrawerButton.propTypes = {
  handleDrawerToggle: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
