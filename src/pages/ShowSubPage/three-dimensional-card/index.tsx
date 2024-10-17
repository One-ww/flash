import React from "react";

import styles from "./index.scss";

const ThreeDimensionalCard: React.FC = () => {
  return (
    <div className={styles.threeDimensionalCardContainer}>
      <div className={styles.card}>
        <img
          src="https://img.huahuabiz.com/user_files/20241014/172889168681462.jpeg"
          className={styles.cover}
        />
        <img
          src="https://img.huahuabiz.com/user_files/20241014/172889168681764.png"
          className={styles.title}
        />
        <img
          src="https://img.huahuabiz.com/user_files/20241014/1728891686817528.webp"
          className={styles.hero}
        />
      </div>
      <div className={styles.card}>
        <img
          src="https://img.huahuabiz.com/user_files/20241014/1728891686817440.jpeg"
          className={styles.cover}
        />
        <img
          src="https://img.huahuabiz.com/user_files/20241014/172889168681794.png"
          className={styles.title}
        />
        <img
          src="https://img.huahuabiz.com/user_files/20241014/1728891686817726.webp"
          className={styles.hero}
        />
      </div>
    </div>
  );
};

export default ThreeDimensionalCard;
