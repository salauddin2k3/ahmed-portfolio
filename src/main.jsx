import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './Route/Route';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: red[500],
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Route></Route>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>

)
