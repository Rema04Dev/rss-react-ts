import { PaletteOptions, alpha } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

const black = '#050C1D';
const orange = '#FF971D';

interface Colors {
    black: {
        main: string;
    },
    orange: {
        main: string;
        light: string;
    }
}

const COLORS: Colors = {
    black: {
        main: black,
    },
    orange: {
        main: orange,
        light: alpha(orange, 0.15)
    }
}

const palette: PaletteOptions & Colors = {
    primary: {
      main: orange,
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
    },
    ...COLORS,
  };
  
  export default palette;