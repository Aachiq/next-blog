import { Box, Typography } from "@mui/material";
import React from "react";

// this compoennet without "state" so its SSC by default;
export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          height: "400px",
          overflowY: "auto",
        }}
      >
        <Typography variant="h3">About Our Digital Company</Typography>
        <Typography variant="body2">
          Our company specializes in providing cutting-edge digital solutions
          that drive innovation and efficiency. With a dedicated team of
          professionals, we offer a range of services designed to meet the
          unique needs of our clients. Our mission is to empower businesses with
          the tools and technologies they need to succeed in the digital age. We
          are committed to delivering high-quality results and exceptional
          service, helping our clients achieve their goals and stay ahead in a
          competitive market.
        </Typography>
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
