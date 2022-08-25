import { useState } from 'react';
import { Container, Grid, Box, Tab, Tabs, Typography,Paper,Fab } from '@mui/material/';
import TeamInfo from '@components/UIComponenets/TeamInfo';
import MedicineList from '@components/UIComponenets/MedicineList';
import AddIcon from '@mui/icons-material/Add';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default function CalculatePage() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container component="main" maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                    <TeamInfo />
                </Grid>
                <Grid item md={9} xs={12}>
                    <Paper elevation={1}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" scrollButtons="auto">
                            <Tab label="高山用藥物"  />
                            <Tab label="口服藥物"  />
                            <Tab label="外用藥物/器材" />
                        </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <MedicineList/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <MedicineList/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <MedicineList/>
                        </TabPanel>
                        </Paper>
                </Grid>
            </Grid>
            <div style={{position: 'fixed',bottom: 20,right: 20}}>
                <Fab size="medium" color="secondary" aria-label="add">
                <AddIcon />
                </Fab>
            </div>
        </Container>
    )
}