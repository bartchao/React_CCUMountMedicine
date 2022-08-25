/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Box } from '@mui/material/';
import moment from 'moment';
import pjson from '../../../../package.json';

const style = {
  left: 0,
  bottom: 0,
  width: '100%',
  flex: '0 0 5vh',
  backgroundColor: 'footer.background',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};
function Footer() {
  return (
    <Box component="footer" sx={style}>
      <span style={{ textAlign: 'center', color: '#fff' }}>
        &copy; {moment().format('YYYY')} Delta IT. All Rights Reserved. / version {pjson.version}{' '}
        /Env: {process.env.REACT_APP_ENV}
      </span>
    </Box>
  );
}

export default React.memo(Footer);
