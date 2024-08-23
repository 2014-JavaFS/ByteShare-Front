import { createTheme } from "@mui/material/styles";
import * as colors from "@mui/material/colors";

//REFERENCE FOR THEMING
//https://mui.com/material-ui/customization/default-theme/

const theme = createTheme({
  palette: {
    primary: {
      main: colors.green[400],
    },
    secondary: {
      main: colors.grey[100],
    },
    background: {
      default: "#232323",
      paper: colors.green[400],
    },
    info: {
      main: colors.lightGreen[300],
    },
    text: {
      primary: "#121212",
    },
  },
  typography: {
    h2: {
      fontWeight: 300,
    },
    h3: {
      fontWeight: 300,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.green[400],
        },
      },
    },
  },
});

export default theme;

//"module augmentation"
//this defines a
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
