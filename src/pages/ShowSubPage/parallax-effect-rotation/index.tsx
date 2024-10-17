import React from "react";

import styles from "./index.scss";

const ParallaxEffectRotation: React.FC = () => {
  return (
    <div className={styles.ParallaxEffectRotationContainer}>
      <div className={styles.container}>
        <div className={styles.item}>
          <img
            src="https://img.huahuabiz.com/user_files/20241014/1728890132815973.jpeg"
            alt=""
          />
        </div>
        <div className={styles.item}>
          <img
            src="https://img.huahuabiz.com/user_files/20241014/1728890132818386.jpeg"
            alt=""
          />
        </div>
        <div className={styles.item}>
          <img
            src="https://img.huahuabiz.com/user_files/20241014/1728890132818383.jpeg"
            alt=""
          />
        </div>
        <div className={styles.item}>
          <img
            src="https://img.huahuabiz.com/user_files/20241014/172889013281828.jpeg"
            alt=""
          />
        </div>
        <div className={styles.item}>
          <img
            src="https://img.huahuabiz.com/user_files/20241014/1728890132818182.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ParallaxEffectRotation;
