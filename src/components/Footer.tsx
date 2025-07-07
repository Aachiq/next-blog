"use client";

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
      <Typography>DigitalCompany 2024/2025</Typography>
      <a
        href="/documents/terms_use.pdf"
        download
        style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      >
        <Typography>Terms Of Use</Typography>
      </a>
    </Box>
  );
}
