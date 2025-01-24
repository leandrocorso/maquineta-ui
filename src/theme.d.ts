import { PaletteOptions, Palette } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // Changing palette options
  interface Palette {
    green: Palette["primary"];
    yellow: Palette["primary"];
  }

  interface PaletteOptions {
    green?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    text?: string;
  }

  interface SimplePaletteColorOptions {
    text?: string;
  }

  // Changing typography options
  interface TypographyVariants {
    recordsetTitle: React.CSSProperties;
    recordsetCaption: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    recordsetTitle?: React.CSSProperties;
    recordsetCaption?: React.CSSProperties;
  }
}
