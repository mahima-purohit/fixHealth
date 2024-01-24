import React from "react";
import styles from "./Testimonials.module.css";
import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";
import PatientCard from "./PatientCard";
import patient1 from "../../assets/clientpictures/Client1.png";
import patient2 from "../../assets/clientpictures/client2.png";
import patient3 from "../../assets/clientpictures/client3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSwiper } from "swiper/react";

const Testimonials = () => {
  const swiper = useSwiper();

  let patients = [
    {
      issue: "My frozen shoulder is gone",
      image: patient1,
      name: "Jane Cooper",
      doctorName: "Dr Amit Choudhary",
      message:
        "hjhjhfj fhjfhjf bjhdjhjd hdjhj hjdhdjh hjhjhs hjfhjfn jhdjhjdhhfhh hdjhjhdjhs vbvbvbvbv bvbvbv ",
    },
    {
      issue: "Fixed back pain from home",
      image: patient2,
      name: "Devon Lane",
      doctorName: "Dr Liam Burrow",
      message:
        "hjhjhfj fhjfhjf bjhdjhjd hdjhj hjdhdjh hjhjhs hjfhjfn jhdjhjdhhfhh hdjhjhdjhs vbvbvbvbv bvbvbv ",
    },
    {
      issue: "Sitting job back pain eased",
      image: patient3,
      name: "Robers Fox",
      doctorName: "Dr Liam Burrow",
      message:
        "hjhjhfj fhjfhjf bjhdjhjd hdjhj hjdhdjh hjhjhs hjfhjfn jhdjhjdhhfhh hdjhjhdjhs vbvbvbvbv bvbvbv ",
    },
    {
      issue: "Fixed back pain from home",
      image: patient2,
      name: "Robers Fox",
      doctorName: "Dr Liam Burrow",
      message:
        "hjhjhfj fhjfhjf bjhdjhjd hdjhj hjdhdjh hjhjhs hjfhjfn jhdjhjdhhfhh hdjhjhdjhs vbvbvbvbv bvbvbv ",
    },
    {
      issue: "Sitting job back pain eased",
      image: patient3,
      name: "Robers Fox",
      doctorName: "Dr Liam Burrow",
      message:
        "hjhjhfj fhjfhjf bjhdjhjd hdjhj hjdhdjh hjhjhs hjfhjfn jhdjhjdhhfhh hdjhjhdjhs vbvbvbvbv bvbvbv ",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerContainer1}>
        <p className={styles.heading}>What says our happy Patients</p>
      </div>
      <div className={styles.carouselWrapper}>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log("slide Change")}
        >
          <LeftNavigation />
          <RightNavigation />
          {patients.map((client) => {
            return (
              <SwiperSlide>
                <PatientCard data={client} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
