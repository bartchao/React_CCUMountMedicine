import { Dialog, DialogActions,DialogTitle,Stack,Input,IconButton,Button, DialogContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function CountDialog(props) {
  const { onClose, count, open,onCountChange,handleReset } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
              <DialogTitle>設定數量</DialogTitle>
              <DialogContent>
        <Stack direction="row" spacing={1}>
          <IconButton onClick={()=> onCountChange(count-1)}>
            <RemoveIcon />
          </IconButton>
          <Input
            size="small"
            value={count}
            label="數量"
            sx={{ width: 80 }}
            inputProps={{ min: 0, style: { textAlign: 'center' } }}
          ></Input>
          <IconButton onClick={()=> onCountChange(count+1)}>
            <AddIcon />
          </IconButton>
                  </Stack>
                  </DialogContent>
          <DialogActions>
                  <Button onClick={handleReset}>重設</Button>
              
                  <Button onClick={handleClose}>關閉</Button>
        </DialogActions>
    </Dialog>
  );
}