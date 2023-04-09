import { createTheme, PaletteOptions } from '@mui/material';
import { red } from '@mui/material/colors';

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6002ee', // 500
      dark: '#0000d6', // 900
      light: '#d4bff9', // 100
    },
    secondary: {
      main: '#a44',
    },
  },
});
