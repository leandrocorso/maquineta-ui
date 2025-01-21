import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2F76FC",
      dark: "#0A386E",
      contrastText: "#ffffff",
      text: "#28343E",
    },
    secondary: {
      main: "#6B61F2",
      light: "#B3AFF7",
      contrastText: "#ffffff",
      text: "#1A1366",
    },
    green: {
      main: "#67D89C",
      dark: "#5BC986",
      contrastText: "#505050",
      text: "#238752",
    },
    yellow: {
      main: "#F8BF35",
      dark: "#DBA42F",
      contrastText: "#505050",
      text: "#9A6F05",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    recordsetTitle: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: "1rem",
      textTransform: "uppercase",
    },
    recordsetCaption: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
    },
  },
});

export default theme;
