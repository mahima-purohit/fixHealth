import React from "react";
import leftNav from "../../assets/leftnav.png";
import { Swiper, useSwiper } from "swiper/react";
import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

const LeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <img
          src={leftNav}
          alt="leftNav"
          onClick={() => swiper.slidePrev()}
          width={50}
        />
      )}
    </div>
  );
};

export default LeftNavigation;
