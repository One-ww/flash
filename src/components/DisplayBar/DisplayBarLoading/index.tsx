import React from "react";

import styles from "./index.scss";

const DisplayBarLoading: React.FC = () => {
  return (
    <div className={styles.displayBarLoading}>
      <div className={styles.bar} />
    </div>
  );
};

export default DisplayBarLoading;
