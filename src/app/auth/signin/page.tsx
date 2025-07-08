"use client"; // use this when working with state

import { Box, TextField, Button, Alert } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { ILoginPayload } from "../auth.types";
import { userLoginService } from "@/services/authService";
import { useRouter } from "next/navigation";
import { console } from "inspector";

export default function SigninPage() {
  const [userLogin, setUserLogin] = useState<ILoginPayload>({
    email: "",
    password: "",
  });
  const [loginSuccessMsg, setLoginSuccessMsg] = useState<string>("");
  const router = useRouter();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setUserLogin((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await userLoginService(userLogin);
      console.log("result 1:", result);
      if (result) {
        console.log("hello result");
        setUserLogin({
          email: "",
          password: "",
        });
        setLoginSuccessMsg("User Connected Successfully !");
        setTimeout(() => setLoginSuccessMsg(""), 5000); // clear after 3s

        // Store user infos excluding (token)
        console.log("Returned result from backend :", result);

        localStorage.setItem("userInfos", JSON.stringify(result));

        // redirect to home page
        // router.push("/");
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
          CONNEXION
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
          label="Password"
          id="password"
          type="password"
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
