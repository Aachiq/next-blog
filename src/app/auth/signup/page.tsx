"use client"; // use this when working with state

import { Box, TextField, Button, Alert } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { ILoginInfos } from "../auth.types";
import { userLoginService } from "@/services/authService";

export default function SignupPage() {
  const [userLogin, setUserLogin] = useState<ILoginInfos>({
    email: "",
    password: "",
  });
  const [loginSuccessMsg, setLoginSuccessMsg] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setUserLogin((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await userLoginService(userLogin);
      console.log("result:", result);
      if (result) {
        setUserLogin({
          email: "",
          password: "",
        });
        setLoginSuccessMsg("Account Created Successfully !");
        setTimeout(() => setLoginSuccessMsg(""), 5000); // clear after 3s
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmitSignUp}
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
          CONNEXTION
        </Typography>
        <TextField
          fullWidth
          label="Email"
          id="email"
          type="email"
          value={userLogin?.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Phone"
          id="phone"
          value={userLogin?.password}
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
          SignIn
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
