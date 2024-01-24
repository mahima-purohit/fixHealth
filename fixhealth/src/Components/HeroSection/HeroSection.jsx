import React from "react";
import styles from "./HeroSection.module.css";
import heroImage from "../../assets/heroImage1.jpg";
import { Box, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <Box className={styles.navMenu}>
        <div>Home</div>
        <div>Services</div>
        <div>Blogs</div>
        <div>About</div>
        <Button>Book Now</Button>
      </Box>
      <Box sx={{ height: "100" }}>
        <img src={heroImage} alt="heroImage" className={styles.heroImage} />
      </Box>
    </div>
  );
};

export default HeroSection;
