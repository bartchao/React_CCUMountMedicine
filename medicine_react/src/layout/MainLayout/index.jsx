import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  position: 'fixed',
  elevation: 0,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
const Main = styled('main')(({ theme }) => ({
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));
export default function MainLayout({ children }) {

  return (
    <>
      <AppBarStyled sx={{ display:'flex' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            醫藥產生器
          </Typography>
          <Button color="inherit">登入</Button>
        </Toolbar>
      </AppBarStyled>
      <Toolbar />
      <Main>{children}</Main>
    </>
  );
}
