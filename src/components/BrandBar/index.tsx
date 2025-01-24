import React, { ReactNode } from "react";
import { Box, Container, styled, Theme } from "@mui/material";

import { Color } from "../../types";

import { MaquinetaLogo } from "../Icon";

interface BrandBarProps {
  color?: Color;
}

const Logo = styled(MaquinetaLogo)(
  ({ theme, color }: { theme: Theme; color: Color }) => ({
    fill: theme.palette[color].contrastText,
  })
);

export const BrandBar = ({ color = Color.primary }: BrandBarProps) => (
  <Box sx={{ backgroundColor: (theme) => theme.palette[color].main }}>
    <Container>
      <Logo />
    </Container>
  </Box>
);
