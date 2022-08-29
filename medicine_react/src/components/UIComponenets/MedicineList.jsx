import {
  Grid
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteItem } from 'src/store/modules/medicine/medicineSlice';
import MedicineItem from './Medicine';
const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  boxShadow: 24,
};

export default function MedicineList({ data, index }) {
  const dispatch = useDispatch();
  const handleDelete = (uuid) => {
    let item = {
      index: index,
      uuid:uuid
    }
    dispatch(deleteItem(item));
  }
  return (
    <Grid container spacing={2}>
      {data.item.map((el, index) => (
        <MedicineItem key={index} index={index} data={el} handleDelete={handleDelete}  />
      ))}
    </Grid>
  )
}
