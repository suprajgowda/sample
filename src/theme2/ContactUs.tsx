import React, { useEffect, useState } from "react";
import { HeaderNew } from "./HomePage";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import Footer from "./Footer";
import FullWidthTextField from "../FullWidthTextField";
import ContactUsImage from "../assets/ContactUsBanner.jpg";
import { textDB } from "../App";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import ReactGA from "react-ga4";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export interface ContactUsInterface {
  name: string;
  email: string;
  phone_number: string;
  branch: string;
  college: string;
  message: string;
  createdAt: any;
}

export default function ContactUs() {
  const [contactInfo, setContactInfo] = useState<ContactUsInterface>({
    name: "",
    email: "",
    phone_number: "",
    branch: "",
    college: "",
    message: "",
    createdAt: "",
  });

  const onChangeFunction = (e: any) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    console.log("inputId      = ", inputId);
    console.log("inputValue   = ", inputValue);

    let tempObj: any = {};
    tempObj[inputId] = inputValue;
    console.log("The Existing info in contact info Object = ", tempObj);

    setContactInfo({ ...contactInfo, ...tempObj });
  };

  useEffect(() => console.log("contactInfo ==== ", contactInfo), [contactInfo]);

  useEffect(() => {
    ReactGA._gaCommandSendPageview(window.location.pathname, "");
  }, []);

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
            flexDirection: { xs: "column", sm: "column" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              py: 4,
            }}
          >
            <Link href="/" underline="none" sx={{ color: "#006983" }}>
              Home
            </Link>
            <ArrowRightIcon sx={{ color: "#f4587a" }} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "0.75rem", sm: "1rem" },
              }}
            >
              Contact Us
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                opacity: "0.9",
                border: { xs: "1px solid #d6d5d0", sm: "5px solid #d6d5d0" },
                borderRight: { xs: "1px solid #d6d5d0", sm: "none" },
                p: { xs: 2, sm: 0 },
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
                Contact Us
              </Typography>

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
                <FullWidthTextField
                  label={"Name"}
                  id={"name"}
                  value={contactInfo.name}
                  onChangeFunc={onChangeFunction}
                />
                <FullWidthTextField
                  label={"Email"}
                  id={"email"}
                  value={contactInfo.email}
                  onChangeFunc={onChangeFunction}
                />
                <FullWidthTextField
                  label={"Phone Number"}
                  id={"phone_number"}
                  value={contactInfo.phone_number}
                  onChangeFunc={onChangeFunction}
                />
                <FullWidthTextField
                  label={"Designation / Branch"}
                  id={"branch"}
                  value={contactInfo.branch}
                  onChangeFunc={onChangeFunction}
                />
                <FullWidthTextField
                  label={"Organization / College"}
                  id={"college"}
                  value={contactInfo.college}
                  onChangeFunc={onChangeFunction}
                />
                <TextField
                  id="message"
                  label="Message"
                  multiline
                  rows={4}
                  sx={{
                    width: "100%",
                  }}
                  onChange={onChangeFunction}
                  value={contactInfo.message}
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
                  onClick={async () => {
                    console.log("contactInfo to send ------ ", contactInfo);
                    if (
                      contactInfo.name !== "" &&
                      contactInfo.email !== "" &&
                      contactInfo.phone_number !== "" &&
                      contactInfo.branch !== "" &&
                      contactInfo.college !== ""
                    ) {
                      contactInfo.createdAt = serverTimestamp();

                      const valRef = collection(textDB, "contact");
                      await addDoc(valRef, { contactInfo: contactInfo });
                      setContactInfo({
                        name: "",
                        email: "",
                        phone_number: "",
                        branch: "",
                        college: "",
                        message: "",
                        createdAt: "",
                      });

                      alert("Data added successfully");
                    } else if (contactInfo.name === "") {
                      alert("Please Enter Name");
                    } else if (contactInfo.email === "") {
                      alert("Please Enter Email");
                    } else if (contactInfo.phone_number === "") {
                      alert("Please Enter Phone Number");
                    } else if (contactInfo.branch === "") {
                      alert("Please Enter Branch");
                    } else if (contactInfo.college === "") {
                      alert("Please Enter College");
                    }
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <img
                src={ContactUsImage}
                alt="Contact Us"
                style={{ width: "100%" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
}
