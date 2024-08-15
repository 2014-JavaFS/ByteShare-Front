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
      default: "#121212",
    },
    info: {
      main: colors.lightGreen[300],
    },
    text: {
      primary: "#aaaaaa",
    },
  },
  shape: {
    borderRadius: 7,
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
    h4: {
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
