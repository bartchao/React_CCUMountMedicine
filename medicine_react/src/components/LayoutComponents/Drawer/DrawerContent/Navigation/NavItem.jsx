/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
// project import

import { toggleMenuAction } from 'store/modules/layout/actions/toggleMenu';
// ==============================|| NAVIGATION - LIST ITEM ||============================== //

function NavItem({ item, level }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.layout);
  const { drawerOpen } = menu;

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
    )),
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = () => {
    dispatch(toggleMenuAction(false));
  };

  const Icon = item.icon;
  const itemIcon = item.icon ? (
    <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} />
  ) : (
    false
  );

  const isSelected = document.location.pathname === item.url;
  // active menu item on page load

  const textColor = '#fff';
  const iconSelectedColor = '#fff';

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id)}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        pl: drawerOpen ? `${level * 28}px` : 1.5,
        py: !drawerOpen && level === 1 ? 1.25 : 1,
        ...(drawerOpen && {
          '&:hover': {
            bgcolor: 'secondary.light',
          },
          '&.Mui-selected': {
            bgcolor: 'secondary.dark',
            borderRight: `2px solid ${theme.palette.secondary.main}`,
            color: iconSelectedColor,
            '&:hover': {
              color: iconSelectedColor,
              bgcolor: 'secondary.light',
            },
          },
        }),
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? iconSelectedColor : textColor,
            ...(!drawerOpen && {
              borderRadius: 1.5,
              width: 36,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                bgcolor: 'secondary.light',
              },
            }),
            ...(!drawerOpen
              && isSelected && {
              bgcolor: 'secondary.dark',
              '&:hover': {
                bgcolor: 'secondary.light',
              },
            }),
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
          primary={(
            <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
              <FormattedMessage id={`navigation.${item.id}`} />
            </Typography>
          )}
        />
      )}
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.oneOf(['item', 'group']),
    url: PropTypes.string,
    icon: PropTypes.object,
    target: PropTypes.bool,
    disabled: PropTypes.bool,
    external: PropTypes.bool,
  }).isRequired,
  level: PropTypes.number,
};
NavItem.defaultProps = {
  level: 1,
};
export default NavItem;
