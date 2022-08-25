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
} from '@mui/material';
import { Delete } from '@mui/icons-material/';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MedicineItem({ data, handleOpen }) {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
  const [style, setStyle] = useState({ visibility: 'hidden' });

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
                {matchesSm && (
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
                {!matchesSm && <Avatar>{count}</Avatar>}
              </Box>
            }
          >
            <ListItemButton onClick={() => handleOpen(data)}>
              <ListItemText primary="Inbox" secondary="TEST" />
            </ListItemButton>
          </ListItem>
        </Paper>
      </Grid>
    </>
  );
}
