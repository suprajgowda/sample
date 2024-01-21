import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { HeaderNew } from "./theme2/HomePage";
import Footer from "./theme2/Footer";
import FullWidthTextField from "./FullWidthTextField";
import { database } from "./App";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState<any>({
    email: "",
    password: "",
  });

  const history = useNavigate();

  const onChangeFunction = (e: any) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    console.log("inputId      = ", inputId);
    console.log("inputValue   = ", inputValue);

    let tempObj: any = {};
    tempObj[inputId] = inputValue;
    console.log("The Existing info in contact info Object = ", tempObj);

    setLoginInfo({ ...loginInfo, ...tempObj });
  };

  const loginClick = async () => {
    console.log("Login info to send ------ ", loginInfo);
    if (loginInfo.email !== "" && loginInfo.password !== "") {
      const login = await signInWithEmailAndPassword(
        database,
        loginInfo.email,
        loginInfo.password
      );

      setLoginInfo({
        email: "",
        password: "",
      });

      console.log("Login === ", login);

      alert("Logged In successfully");
      history("/dashboard");
    } else if (loginInfo.email === "") {
      alert("Please Enter Email");
    } else if (loginInfo.password === "") {
      alert("Please Enter Password");
    }
  };

  return (
    <>
      <HeaderNew />

      <Box
        sx={{
          mx: "10%",
          mt: { xs: "0", md: "4%" },
          mb: { xs: "0", md: "4%" },
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            mb: 4,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 4,
              mb: 5,
              mx: { xs: "0%", md: "10%" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "#000",
                left: { xs: "5%", md: "15%" },
                fontSize: { xs: "25px", md: "50px" },
                fontWeight: 700,
                pt: 4,
              }}
            >
              Login
            </Typography>

            <FullWidthTextField
              label={"Email"}
              id={"email"}
              value={loginInfo.email}
              onChangeFunc={onChangeFunction}
            />

            <FullWidthTextField
              label={"Password"}
              id={"password"}
              textType={"password"}
              value={loginInfo.password}
              onChangeFunc={onChangeFunction}
            />

            <Button
              variant="contained"
              sx={{
                width: { xs: "100%", sm: "70%" },
                backgroundColor: "#006983",
                "&:hover": {
                  backgroundColor: "#006983",
                },
                boxShadow: "5px 5px 0px 0px #bed89d",
                py: 2,
                my: 2,
                mt: 4,
              }}
              onClick={loginClick}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export function Register() {
  const [registerInfo, setRegisterInfo] = useState<any>({
    email: "",
    password: "",
  });

  const onChangeFunction = (e: any) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    console.log("inputId      = ", inputId);
    console.log("inputValue   = ", inputValue);

    let tempObj: any = {};
    tempObj[inputId] = inputValue;
    console.log("The Existing info in contact info Object = ", tempObj);

    setRegisterInfo({ ...registerInfo, ...tempObj });
  };

  const registerClick = async () => {
    console.log("Register info to send ------ ", registerInfo);

    if (registerInfo.email !== "" && registerInfo.password !== "") {
      const register = await createUserWithEmailAndPassword(
        database,
        registerInfo.email,
        registerInfo.password
      );

      console.log("Register === ", register);

      setRegisterInfo({
        email: "",
        password: "",
      });

      alert("Register In successfully");
    } else if (registerInfo.email === "") {
      alert("Please Enter Email");
    } else if (registerInfo.password === "") {
      alert("Please Enter Password");
    }
  };

  return (
    <>
      <HeaderNew />

      <Box
        sx={{
          mx: "10%",
          mt: { xs: "0", md: "4%" },
          mb: { xs: "0", md: "4%" },
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            mb: 4,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 4,
              mb: 5,
              mx: { xs: "0%", md: "10%" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "#000",
                left: { xs: "5%", md: "15%" },
                fontSize: { xs: "25px", md: "50px" },
                fontWeight: 700,
                pt: 4,
              }}
            >
              Register
            </Typography>

            <FullWidthTextField
              label={"Email"}
              id={"email"}
              value={registerInfo.email}
              onChangeFunc={onChangeFunction}
            />

            <FullWidthTextField
              label={"Password"}
              id={"password"}
              textType={"password"}
              value={registerInfo.password}
              onChangeFunc={onChangeFunction}
            />

            <Button
              variant="contained"
              sx={{
                width: { xs: "100%", sm: "70%" },
                backgroundColor: "#006983",
                "&:hover": {
                  backgroundColor: "#006983",
                },
                boxShadow: "5px 5px 0px 0px #bed89d",
                py: 2,
                my: 2,
                mt: 4,
              }}
              onClick={registerClick}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
