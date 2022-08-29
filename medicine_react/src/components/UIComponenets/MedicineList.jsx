import { useState } from 'react';
import {
  Grid,

} from '@mui/material';
import MedicineItem from './Medicine';

const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  boxShadow: 24,
};
const testData = {
    title: 'Diamox',
    subtitle: 'TEst',
    body: 'Hello world',
    count: 24,
}
export default function MedicineList({ data }) {
    
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
      {data.item.map((el, index) => (
        <MedicineItem key={index} data={el} handleOpen={handleOpen} />
      ))}
    </Grid>
  );
}
