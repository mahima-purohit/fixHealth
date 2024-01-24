import React from "react";
import rightNav from "../../assets/rightnav.png";
import { useSwiper } from "swiper/react";
import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

const RightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <img
          src={rightNav}
          alt="leftNav"
          onClick={() => swiper.slideNext()}
          width={50}
        />
      )}
    </div>
  );
};

export default RightNavigation;
