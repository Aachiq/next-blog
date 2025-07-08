"use client"; // use this when working with state

import { Box, TextField, Button, Alert } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { IRegisterInfos } from "../auth.types";
import { userRegisterService } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [userRegister, setUserRegister] = useState<IRegisterInfos>({
    name: "",
    email: "",
    password: "",
  });
  const [registerSuccessMsg, setRegisterSuccessMsg] = useState<string>("");

  // user router
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setUserRegister((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await userRegisterService(userRegister);
      if (result) {
        setUserRegister({
          name: "",
          email: "",
          password: "",
        });
        setRegisterSuccessMsg("Account Created Successfully !");
        // redirect to signin
        router.push("/auth/signin");
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
          CREATE ACCOUNT
        </Typography>
        <TextField
          fullWidth
          label="Full Name"
          id="name"
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
          label="Password"
          type="password"
          id="password"
          value={userRegister?.password}
          onChange={handleChange}
        />

        {registerSuccessMsg && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {registerSuccessMsg}
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
