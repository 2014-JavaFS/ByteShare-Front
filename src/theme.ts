import { createTheme } from "@mui/material/styles";
import * as colors from "@mui/material/colors";

//REFERENCE FOR THEMING
//https://mui.com/material-ui/customization/default-theme/

const theme = createTheme({
  palette: {
    primary: {
      main: colors.lightGreen[800],
      contrastText: "#333333",
    },
    secondary: {
      main: "#302020",
      contrastText: "#302020",
    }, 
    info: {
      main: colors.brown[300],
    },
    success: {
      main: "#555555",
    },
    text: {
      primary: "#00000099",
    },
    background: {
      default: "#232323",
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
          backgroundColor: colors.green[500],
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.blueGrey[600],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colors.blueGrey[900],
          color: "#cdcdcd",
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
