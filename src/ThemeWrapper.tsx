import { ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import theme from "./theme";

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default ThemeWrapper;
