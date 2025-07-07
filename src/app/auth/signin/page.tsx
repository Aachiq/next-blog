"use client"; // use this when working with state

import { Box, TextField, Button, Alert } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { IRegisterInfos } from "../auth.types";
import { userRegisterService } from "@/services/authService";

export default function SigninPage() {
  const [userRegister, setUserRegister] = useState<IRegisterInfos>({
    name: "",
    email: "",
    password: "",
  });
  const [loginSuccessMsg, setLoginSuccessMsg] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setUserRegister((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await userRegisterService(userRegister);
      console.log("result:", result);
      if (result) {
        setUserRegister({
          name: "",
          email: "",
          password: "",
        });
        setLoginSuccessMsg("User Connected Successfully !");
        setTimeout(() => setLoginSuccessMsg(""), 5000); // clear after 3s
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmitSignIn}
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
          CREATE ACCOUNT
        </Typography>
        <TextField
          fullWidth
          label="Full Name"
          id="fullname"
          value={userRegister?.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email"
          id="email"
          type="email"
          value={userRegister?.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Phone"
          id="phone"
          value={userRegister?.password}
          onChange={handleChange}
        />

        {loginSuccessMsg && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {loginSuccessMsg}
          </Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          SignUp
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
