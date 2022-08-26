import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
    CardActions,
  Button,Modal
} from '@mui/material';
import MedicineItem from './Medicine';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  boxShadow: 24,
};

export default function MedicineList() {
  const [open, setOpen] = useState(false);
    const handleOpen = (data) => {
        alert(data);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      {[...Array(10)].map((el,index) => (
          <MedicineItem key={index} data={index} handleOpen={handleOpen}/>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <Card sx={{ minWidth: 400 }}>
            <CardContent>
              <Typography variant="h5" color="text.primary" gutterBottom>
                Diamox
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </Grid>
  );
}
