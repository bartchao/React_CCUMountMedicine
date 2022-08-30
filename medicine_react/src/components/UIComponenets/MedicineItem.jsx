import { useState } from 'react';
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  CardActions,
  Modal,
} from '@mui/material';
import { Delete } from '@mui/icons-material/';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CountDialog from './MobileCountDialog';
import useReset from 'src/hook/useReset';
import { useDispatch } from 'react-redux';
import { modifyMedicineItemInCategory } from 'src/store/modules/medicine/medicineSlice';
const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  boxShadow: 24,
};
export default function MedicineItem({ data,handleDelete }) {
  const { title, subtitle, text, formula, count,uuid } = data;
  const theme = useTheme();
  const dispatch = useDispatch();
  const matchesTouch = useMediaQuery(theme.breakpoints.up('md'));
  const [style, setStyle] = useState({ visibility: 'hidden' });

  const [countDialogOpen, setCountDialogOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [newCount, setNewCount] = useState(count);
  const defaultValue = useReset(formula);
  const handleCountDialogOpen = () => {
    setCountDialogOpen(true);
  };

  const handleCountDialogClose = () => {
    setCountDialogOpen(false);
  };
  const handleInfoModalOpen = () => {
    setInfoModalOpen(true);
  };
  const handleInfoModalClose = () => {
    setInfoModalOpen(false);
  };
  const handleCountChange = (value) => {
    if (value >= 0) {
      setNewCount(value);
      dispatch(modifyMedicineItemInCategory({ uuid, value }));
    }
  };

  return (
    <>
      <Grid item lg={6} xs={12}>
        <Paper elevation={2}>
          <ListItem
            onMouseEnter={(e) => {
              setStyle({});
            }}
            onMouseLeave={(e) => {
              setStyle({ visibility: 'hidden' });
            }}
            disablePadding
            secondaryAction={
              <Box sx={{ display: 'flex' }}>
                {matchesTouch && (
                  <>
                    <Box sx={style}>
                      <IconButton onClick={()=>handleDelete(uuid)}>
                        <Delete />
                      </IconButton>
                      <IconButton
                        onClick={() => handleCountChange(newCount - 1)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleCountChange(newCount + 1)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                    <Button onClick={handleCountDialogOpen}>
                      <Typography variant="h6">{newCount}</Typography>
                    </Button>
                  </>
                )}
                {!matchesTouch && (
                  <Button variant="contained" onClick={handleCountDialogOpen}>
                    <Typography variant="h6">{newCount}</Typography>
                  </Button>
                )}
              </Box>
            }
          >
            <ListItemButton onClick={handleInfoModalOpen}>
              <ListItemText primary={title} secondary={subtitle} />
            </ListItemButton>
          </ListItem>
        </Paper>
        <CountDialog
          count={newCount}
          open={countDialogOpen}
          onClose={handleCountDialogClose}
          onCountChange={handleCountChange}
          handleReset={()=> handleCountChange(defaultValue)}
        />
      </Grid>
      <Modal
        open={infoModalOpen}
        onClose={handleInfoModalClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...ModalStyle }}>
          <Card sx={{ minWidth: 400 }}>
            <CardContent>
              <Typography variant="h5" color="text.primary" >
                {title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {subtitle}
              </Typography>
              <Typography variant="body1" gutterBottom>{text}</Typography>
              <Typography variant="overline">公式:{formula.replace('days', '天數').replace('person', '人數')}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </>
  );
}