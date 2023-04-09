import { createTheme } from '@mui/material';

// export default createTheme({
//   components: {
//     // Name of the component
//     MuiButton: {
//       styleOverrides: {
//         // Name of the slot
//         root: {
//           // Some CSS
//           fontSize: '1rem',
//         },
//       },
//     },
//   },
// });

export default createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6057a6',
      dark: '#3c2a6c',
      light: '#cccce5',
      contrastText: 'white',
    },
    secondary: {
      main: '#00c552',
      dark: '#007118',
      light: '#c4eecc',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
    },
  },
});
