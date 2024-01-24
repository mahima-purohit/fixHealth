import React from "react";
import { Container } from "@mui/material";
import HeroSection from "../HeroSection/HeroSection";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import styles from "./LandingPage.module.css";
import Testimonials from "../Testimonials/Testimonials";
import Box from "@mui/material/Box";

const LandingPage = () => {
  return (
    <Box sx={{ flexDirection: "column" }}>
      <NavBar />
      <HeroSection />
      <Form />
      <Testimonials />
    </Box>
  );
};

export default LandingPage;
