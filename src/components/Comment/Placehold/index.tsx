import React from "react";

import styles from "./index.scss";

interface Props {
  msgCount?: number;
  isMsg?: boolean;
}

const Placehold: React.FC<Props> = ({ msgCount, isMsg }) => {
  return (
    <>
      {msgCount ? (
        <div className={styles.hasMag}>
          {msgCount}条{isMsg ? "留言" : "评论"}
        </div>
      ) : (
        <div className={styles.noMag}>
          暂时没有{isMsg ? "留言" : "评论"}&nbsp;~
        </div>
      )}
    </>
  );
};

export default Placehold;
