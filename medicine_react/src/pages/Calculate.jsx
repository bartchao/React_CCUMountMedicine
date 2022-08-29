import { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Tab,
  Tabs,
  Typography,
  Paper,
  Fab,
} from '@mui/material/';
import TeamInfo from '@components/UIComponenets/TeamInfo';
import MedicineList from '@components/UIComponenets/MedicineList';
import AddIcon from '@mui/icons-material/Add';
import medicine from 'src/common/medicine.json';
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
      <Grid container spacing={1}>
        <Grid item md={3} xs={12}>
          <TeamInfo />
        </Grid>
        <Grid item md={9} xs={12}>
          <Paper elevation={1}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
              >
                {medicine.medicine.map((category, index) => (
                  <Tab label={category.category} value={index} />
                ))}
                <Tab icon={<AddIcon />} iconPosition="start" label="新增種類" />
              </Tabs>
            </Box>
                      {medicine.medicine.map((category, index) => (
                          <TabPanel value={value} index={index}>
                              <MedicineList data={category} />
                          </TabPanel>))};
          </Paper>
        </Grid>
      </Grid>
      <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <div style={{ position: 'fixed', bottom: 80, right: 20 }}>
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </Container>
  );
}
