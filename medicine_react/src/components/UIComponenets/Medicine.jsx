import { useState } from 'react';
import {
  Avatar,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Grid,
  Typography,
  Paper,
  Dialog,
  DialogTitle,
  List,
  ListItemAvatar,
    Stack,
  TextField
} from '@mui/material';
import { Delete } from '@mui/icons-material/';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Input from '@mui/material/Input';
import { Toolbar } from '@mui/material';
export default function MedicineItem({ data, handleOpen }) {
  const theme = useTheme();
  const matchesTouch = useMediaQuery(theme.breakpoints.up('md'));
  const [style, setStyle] = useState({ visibility: 'hidden' });

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  let count = 24;
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
                      <IconButton>
                        <Delete />
                      </IconButton>
                      <IconButton>
                        <RemoveIcon />
                      </IconButton>
                      <IconButton>
                        <AddIcon />
                      </IconButton>
                    </Box>
                    <Button>
                      <Typography variant="h6">{count}</Typography>
                    </Button>
                  </>
                )}
                {!matchesTouch && (
                  <Button variant="contained" onClick={handleClickOpen}>
                    <Typography variant="h6">{count}</Typography>
                  </Button>
                )}
              </Box>
            }
          >
            <ListItemButton >
              <ListItemText primary="Inbox" secondary="TEST" />
            </ListItemButton>
          </ListItem>
        </Paper>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </Grid>
    </>
  );
}

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
    let count = 24;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
      <Dialog onClose={handleClose} open={open} >
          <Box p={1}>
      <DialogTitle>設定數量</DialogTitle>
          <Stack direction="row" spacing={1}>
              <IconButton>
        <RemoveIcon />
              </IconButton>
              <Input size="small" value={count} label="數量" sx={{ width: 80 }}  inputProps={{min: 0, style: { textAlign: 'center' }}}></Input>
      <IconButton>
        <AddIcon />
              </IconButton>
          </Stack>
    <Toolbar/>
          </Box>
    </Dialog>
  );
}
