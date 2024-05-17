import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routers from './Routes/Routes.jsx';
import './index.css';
import store from './store';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={true}
        />
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
