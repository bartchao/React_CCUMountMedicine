import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Divider,
  Grid,
  IconButton,
  Paper,
  Popper,
  Stack,
  Typography,
} from '@mui/material';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

// project import
import MainCard from 'components/third-party/MainCard';
import Transitions from 'components/LayoutComponents/Transitions';

import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom/';
import { LogoutNotifier } from 'store/modules/auth/actions/auth';

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

function Profile({ auth, onLogout }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    if (auth.isLogin) {
      setOpen((prevOpen) => !prevOpen);
    } else {
      navigate('/login');
    }
  };
  const handleLogout = () => {
    setOpen(false);
    onLogout();
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = 'grey.500';

  const alreadyLogin = (
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
                width: 290,
                minWidth: 240,
                maxWidth: 290,
                [theme.breakpoints.down('md')]: {
                  maxWidth: 250,
                },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border={false} content={false}>
                  <CardContent sx={{ px: 2.5, pt: 3 }}>
                    <Grid container justifyContent="space-between" alignItems="center">
                      <Grid item>
                        <Stack direction="row" spacing={1.25} alignItems="center">
                          <Stack>
                            <Typography variant="h6">
                              <FormattedMessage id="common.profile.name" />
                              ：
                              {auth.user.username}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              <FormattedMessage id="common.profile.organization" />
                              ：
                            </Typography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item>
                        <IconButton size="large" color="secondary" onClick={handleLogout}>
                          <LogoutOutlined />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Divider />
                    <Box sx={{ pt: 1 }}>
                      <Typography variant="h6">
                        <FormattedMessage id="common.profile.phone" />
                        ：
                      </Typography>
                      <Typography variant="h6">
                        <FormattedMessage id="common.profile.computer" />
                        ：
                      </Typography>
                    </Box>
                  </CardContent>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          )}
        </Transitions>
      )}
    </Popper>
  );
  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 1,
          bgcolor: open ? iconBackColorOpen : 'transparent',
          borderRadius: 1,
          '&:hover': { bgcolor: 'primary.darker' },
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 0.5 }}>
          <UserOutlined />
          <Typography variant="h6">
            {auth.isLogin ? auth.user.username : <FormattedMessage id="login.signin" />}
          </Typography>
        </Stack>
      </ButtonBase>
      {auth.isLogin && alreadyLogin}
    </Box>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  onLogout: LogoutNotifier,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

Profile.propTypes = {
  auth: PropTypes.shape({
    isLogin: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
};
