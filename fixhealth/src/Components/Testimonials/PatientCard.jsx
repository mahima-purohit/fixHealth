import React from "react";
import styles from "./PatientCard.module.css";

const PatientCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.issue}>
        <h2>{data.issue}</h2>
      </div>
      <img src={data.image} alt="clientImage" className={styles.cardImage} />
      <div>
        <p className={styles.cardName}>{data.name}</p>
      </div>
      <p className={styles.cardMessage}>{data.message}</p>
      <p className={styles.doctorName}>Treated By : {data.doctorName}</p>
    </div>
  );
};

export default PatientCard;
