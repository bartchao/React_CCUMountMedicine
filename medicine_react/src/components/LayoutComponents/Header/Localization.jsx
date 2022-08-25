/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useRef, useState, useCallback, useMemo } from 'react';
import { connect, useDispatch } from 'react-redux';
import { changeLocaleNotifier } from 'store/modules/layout/actions/changeLocale';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  MenuList,
  MenuItem,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';

// project import
import MainCard from 'components/third-party/MainCard';
import Transitions from 'components/LayoutComponents/Transitions';
import { Locales } from 'i18n/locale';
// assets
import { GlobalOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

function Localization({ currentLocale, changeLocaleNotifier }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const currentLang = useMemo(() => Locales.find((item) => item.locale === currentLocale).text, [currentLocale]);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const changeLocale = useCallback(
    (locale) => {
      if (locale !== currentLocale) {
        dispatch(changeLocaleNotifier(locale));
      }
    },
    [],
  );

  const iconBackColorOpen = 'grey.500';
  const MenuItems = Locales.map((item) => (
    <MenuItem key={item.locale} onClick={() => changeLocale(item.locale)}>
      <ListItemText>{item.text}</ListItemText>
    </MenuItem>
  ));

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 1,
          bgcolor: open ? iconBackColorOpen : 'transparent',
          borderRadius: 1,
          '&:hover': { bgcolor: 'primary.darker' },
        }}
        aria-label="localization"
        ref={anchorRef}
        aria-controls={open ? 'localization-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 0.5 }}>
          <GlobalOutlined />
          {!matchesXs && <Typography variant="h6">{currentLang}</Typography>}
        </Stack>
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            {open && (
              <Paper
                sx={{
                  boxShadow: theme.customShadows.z1,
                  width: 150,
                  minWidth: 100,
                  maxWidth: 200,
                  [theme.breakpoints.down('md')]: {
                    maxWidth: 130,
                  },
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <MainCard elevation={0} border={false} content={false}>
                    <CardContent sx={{ px: 2 }}>
                      <MenuList>{MenuItems}</MenuList>
                    </CardContent>
                  </MainCard>
                </ClickAwayListener>
              </Paper>
            )}
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}
const mapStateToProps = (state) => ({
  currentLocale: state.layout.locale,
});
const mapDispatchToProps = { changeLocaleNotifier };
export default connect(mapStateToProps, mapDispatchToProps)(Localization);

Localization.propTypes = {
  currentLocale: PropTypes.string,
  changeLocaleNotifier: PropTypes.func,
};
