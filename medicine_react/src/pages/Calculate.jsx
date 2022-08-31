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
  Fab
} from '@mui/material/';
import TeamInfo from '@components/UIComponenets/TeamInfo';
import MedicineCategory from '@components/UIComponenets/MedicineCategory';
import { useDispatch, useSelector } from 'react-redux';
import { medicineList } from 'src/store/modules/medicine/medicineSlice';
import AddMedicineItem from '@components/UIComponenets/AddMedicineFormDialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { setShowUsage } from '@store/view/viewSlice';
import { useCheck } from 'src/hook/hooks';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const matchesTouch = useMediaQuery(theme.breakpoints.up('md'));
  useCheck();
  const medicine = useSelector(medicineList);
  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
  const handleUsageChecked = () => {
    let newState = !usageChecked;
    setUsageChecked(newState);
    dispatch(setShowUsage(newState));
  };
  const handlePrint = () => {
    navigate('/print');
  }
  const Switches = (
    <FormControlLabel
      control={<Switch checked={usageChecked} onChange={handleUsageChecked} />}
      label="顯示用法"
      sx={{ marginLeft: 'auto' }} />
  );
  const ActionButton = (
    <>
    <AddMedicineItem target={value} sx={{ position: 'fixed', bottom: 20, right: 20 }} />
    <div style={{ position: 'fixed', bottom: 80, right: 20 }}>
        <Fab
          size="medium"
          color="secondary"
          aria-label="print"
          onClick={handlePrint}
        >
          <ArrowForwardIcon />
        </Fab>
      </div>
    </>
  );
  return (
    <Container component="main" maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item md={2} xs={12}>
          <TeamInfo />
        </Grid>
        <Grid item md={10} xs={12}>
          <Paper elevation={1}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
              >
                {medicine && medicine.map((category, index) => (
                  <Tab label={category.category} value={index} />
                ))}
                {matchesTouch && Switches}
              </Tabs>
              {!matchesTouch && Switches}
            </Box>
            {medicine && medicine.map((category, index) => (
              <TabPanel value={value} index={index}>
                <MedicineCategory data={category} index={index} />
              </TabPanel>
            ))}
          </Paper>
        </Grid>
      </Grid>
      {medicine && ActionButton}
    </Container>
  );
}
