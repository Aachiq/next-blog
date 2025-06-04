"use client"; // use this when working with state
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
// import Typography from "@mui/material/Typography";
import { Typography } from "@mui/material";

export default function Contact() {
  const [contactInfo, setContactOInfo] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: 500, maxWidth: "100%" }}>
        <Typography
          variant="h4"
          fontSize={20}
          color="primary"
          textAlign={"center"}
        >
          CONTACT US
        </Typography>
        <TextField fullWidth label="FullName" id="fullName" />
        <TextField fullWidth label="Email" id="email" />
        <TextField fullWidth label="Phone" id="phone" />
        <TextField fullWidth label="Message" id="message" multiline rows={4} />
      </Box>
      <Box>
        <img
          src="/images/about_img.jpg"
          alt="Digital Company"
          className="img-fluid"
          style={{ height: "400px", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}
