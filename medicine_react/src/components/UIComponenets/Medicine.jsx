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
const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  boxShadow: 24,
};
export default function MedicineItem({ data }) {
  const { title, subtitle, text, count } = data;
  const theme = useTheme();
  const matchesTouch = useMediaQuery(theme.breakpoints.up('md'));
  const [style, setStyle] = useState({ visibility: 'hidden' });

  const [countDialogOpen, setCountDialogOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [newCount, setNewCount] = useState(count);
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
    setNewCount(value);
  };
  const handleReset = () => {
    setNewCount(count);
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
                      <IconButton>
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
          handleReset={handleReset}
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
              <Typography variant="h5" color="text.primary" gutterBottom>
                {title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {subtitle}
              </Typography>
              <Typography variant="body2">{text}</Typography>
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
