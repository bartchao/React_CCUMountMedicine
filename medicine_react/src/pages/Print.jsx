import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell as mTableCell,
  TableBody,
  Container,
  Grid,
  styled,
  Paper,Fab
} from '@mui/material/';
import { useSelector } from 'react-redux';
import { medicineList } from 'src/store/modules/medicine/medicineSlice';
import TeamInfo from '@components/UIComponenets/TeamInfo';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
const TableCell = styled(mTableCell)(() => ({
  fontSize: '1.2rem',
}));

export default function PrintPage() {
  const medicine = useSelector(medicineList);
  const handlePdf = () => {
    window.print();
  }
  let list = medicine.map((category) => category.item.map((i) => (
      <TableRow hover key={i.uuid}>
        <TableCell>{i.title}</TableCell>
        <TableCell>{i.subtitle}</TableCell>
        <TableCell>{i.text}</TableCell>
        <TableCell align='right'>{i.count}</TableCell>
      </TableRow>
    ))
  );

  return (
    <>
      <Container component='main' maxWidth='xl'>
        <Grid container spacing={2}>
          <Grid item md={2} xs={12}>
            <TeamInfo />
          </Grid>
          <Grid item md={10} xs={12}>
            <Paper elevation={1} sx={{ p: 1 }}>
              <TableContainer >
              <Table size='small' >
                <TableHead>
                  <TableRow>
                      <TableCell sx={{ width:'15%' }}>藥物名稱</TableCell>
                      <TableCell sx={{ width:'25%'}}>學名</TableCell>
                      <TableCell sx={{ width: '50%' }}>用法</TableCell>
                      <TableCell align='right' sx={{ width: '10%' }}>數量</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{list}</TableBody>
              </Table>
              </TableContainer>
              </Paper>
          </Grid>
        </Grid>
      </Container>
      <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
        <Fab
          size="medium"
          color="secondary"
          aria-label="print"
          onClick={handlePdf}
        >
          <PictureAsPdfIcon />
        </Fab>
      </div>
    </>
  );
}
