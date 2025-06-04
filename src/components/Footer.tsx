import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingY: 2,
      }}
      bgcolor="darkgrey"
    >
      <Typography>Hello Team</Typography>
      <Typography>2024/2025</Typography>
    </Box>
  );
}
