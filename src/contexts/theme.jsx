import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B8FAC', 
    },
    secondary: {
      main: '#4CAF50',
    },
    "libht-blue": {
        main: '#8ED7F0'
    },
    light: {
        main: '#D2EBE7'
    },
    gray: {
        main: "#858585",
    },
    background: {
      default: '#FFFFFF',
      paper: '#F4F6F8',
    },
    text: {
      primary: '#424242',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
