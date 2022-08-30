import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useSelector,useDispatch } from 'react-redux';
import { addMedicineItem,medicineList } from 'src/store/modules/medicine/medicineSlice';

export default function AddMedicineItem({ target }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const medicine = useSelector(medicineList);
  const addToCategory = medicine[target].category;
  const medicineNameRef = useRef();
  const medicineSubNameRef = useRef();
  const medicineUsageRef = useRef();
  const medicineFormulaRef = useRef();
  const medicineCountRef = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    let title = medicineNameRef.current.value;
    let subtitle = medicineSubNameRef.current.value;
    let text = medicineUsageRef.current.value;
    let formula = medicineFormulaRef.current.value;
    let count = medicineCountRef.current.value;
    let payload = { title, subtitle, text, formula, count, target };
    dispatch(addMedicineItem(payload));
    setOpen(false);
  };

  return (
    <>
      <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>新增藥物項目</DialogTitle>
        <DialogContent>
          <DialogContentText>
            將新增至 <b>{addToCategory}</b>
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="medicineName"
            label="藥物名稱"
            variant="standard"
            fullWidth
            required
            inputRef={medicineNameRef}
          />
          <TextField
            autoFocus
            margin="dense"
            id="medicineSubName"
            label="(學名藥)"
            fullWidth
            variant="standard"
            inputRef={medicineSubNameRef}
          />
          <TextField
            autoFocus
            margin="dense"
            id="medicineUsage"
            label="用法"
            multiline
            fullWidth
            inputRef={medicineUsageRef}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="medicineFormula"
            label="公式"
            placeholder="(天數:days/人數:person)"
            fullWidth
            variant="standard"
            inputRef={medicineFormulaRef}
          />
          <TextField
            autoFocus
            margin="dense"
            id="medicineCount"
            label="藥物數量"
            type="number"
            fullWidth
            variant="standard"
            inputRef={medicineCountRef}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSubmit}>新增</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
