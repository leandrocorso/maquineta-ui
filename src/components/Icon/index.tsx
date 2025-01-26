import React from "react";
import { icons } from "../../assets/icons";
// import { styled } from "@mui/material";
import { Color } from "../../types";

interface IconProps {
  image: keyof typeof icons;
  color: Color;
}

export const Icon: React.FC<IconProps> = ({ image, color = "primary" }) => {
  const SvgIcon = icons[image];

  if (!SvgIcon) {
    console.error(`Icon "${image}" not found.`);
    return null;
  }

  // const StyledIcon = styled(SvgIcon)(({ theme }) => ({
  //   fill: theme.palette[color].main,
  // }));

  return <SvgIcon />;
};
