import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Routes from './routes'
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
const theme = createTheme();
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
        </ThemeProvider>
    </BrowserRouter>
        
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
