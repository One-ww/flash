import React from "react";

import styles from "./index.scss";

const PostCardLoading: React.FC = () => {
  return (
    <div className={styles.postCardLoading}>
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </div>
  );
};

export default PostCardLoading;
