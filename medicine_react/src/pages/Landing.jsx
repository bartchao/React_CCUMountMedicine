import { CssBaseline,Typography,Container, Box, Grid, TextField,FormControlLabel,Button,Checkbox,Link } from '@mui/material';

function LandingPage() {    
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
          
        <Typography component="h1" variant="h4">
          醫藥產生器
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="team-name"
                name="teamNameInput"
                required
                fullWidth
                id="teamNameInput"
                label="隊伍名稱"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="teamAttInput"
                label="最高海拔"
                type="number"
                id="teamAttInput"
                inputProps={{ min: 1, step: 500 }}
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="teamDaysInput"
                label="天數"
                type="number"
                min="1"
                name="teamDaysInput"
                inputProps={{ min: 1 }}
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="teamPerson"
                label="人數"
                name="teamPerson"
                autoComplete="team-person"
                type="number"
                inputProps={{ min: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            下一步
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>);
}
export default LandingPage;