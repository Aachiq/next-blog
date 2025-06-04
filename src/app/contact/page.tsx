"use client"; // use this when working with state

import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import {
  IContactInfo,
  sendContactMessageService,
} from "./../../services/contactService";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState<IContactInfo>({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await sendContactMessageService(contactInfo);
      console.error("result:", result);
      if (result?.code === 1) {
        // show message of success "message sent"
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
          textAlign="center"
          mb={2}
        >
          CONTACT US
        </Typography>
        <TextField
          fullWidth
          label="Full Name"
          id="fullname"
          value={contactInfo.fullname}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email"
          id="email"
          type="email"
          value={contactInfo.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Phone"
          id="phone"
          value={contactInfo.phone}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Message"
          id="message"
          value={contactInfo.message}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Send
        </Button>
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
