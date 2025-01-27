import React from "react";
import { useTheme } from "@mui/material";
import ThemeWrapper from "../../ThemeWrapper";
import { Color } from "../../types";
import { icons } from "../../assets/icons";

interface IconProps {
  image: keyof typeof icons;
  color: Color;
}

export const Icon: React.FC<IconProps> = ({ image, color = "primary" }) => {
  const SvgIcon = icons[image];
  const theme = useTheme();

  if (!SvgIcon) {
    console.error(`Icon "${image}" not found.`);
    return null;
  }

  console.log("color", theme.palette[color].main);

  return (
    <ThemeWrapper>
      <SvgIcon style={{ fill: theme.palette[color].main }} />
    </ThemeWrapper>
  );
};
