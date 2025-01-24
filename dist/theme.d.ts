declare module "@mui/material/styles" {
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
    interface TypographyVariants {
        recordsetTitle: React.CSSProperties;
        recordsetCaption: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        recordsetTitle?: React.CSSProperties;
        recordsetCaption?: React.CSSProperties;
    }
}
declare const theme: import("@mui/material/styles").Theme;
export default theme;
