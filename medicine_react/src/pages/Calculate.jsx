import { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Tab,
  Tabs,
  Typography,
  Paper,
  FormControlLabel,
  Switch,
} from '@mui/material/';
import TeamInfo from '@components/UIComponenets/TeamInfo';
import MedicineCategory from '@components/UIComponenets/MedicineCategory';
import { useDispatch, useSelector } from 'react-redux';
import { medicineList } from 'src/store/modules/medicine/medicineSlice';
import AddMedicineItem from '@components/UIComponenets/AddMedicineFormDialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { setShowUsage } from '@store/view/viewSlice';
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
  const dispatch = useDispatch();
  const [usageChecked, setUsageChecked] = useState(false);
  const theme = useTheme();
  const matchesTouch = useMediaQuery(theme.breakpoints.up('md'));
  const medicine = useSelector(medicineList);
  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
  const handleUsageChecked = () => {
    let newState = !usageChecked;
    setUsageChecked(newState);
    dispatch(setShowUsage(newState));
  };
  const Switches = (
    <FormControlLabel
      control={<Switch checked={usageChecked} onChange={handleUsageChecked} />}
      label="顯示用法"
      sx={{ marginLeft: 'auto' }} />
  
  );
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
                {medicine.map((category, index) => (
                  <Tab label={category.category} value={index} />
                ))}
                {matchesTouch && Switches}
              </Tabs>
              {!matchesTouch && Switches}
            </Box>
            {medicine.map((category, index) => (
              <TabPanel value={value} index={index}>
                <MedicineCategory data={category} index={index} />
              </TabPanel>
            ))}
          </Paper>
        </Grid>
      </Grid>
      <AddMedicineItem target={value} />
    </Container>
  );
}
