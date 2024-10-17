import React, { MouseEventHandler } from "react";

import DisplayBarLoading from "./DisplayBarLoading";
import styles from "./index.scss";

interface Props {
  content?: string;
  right?: string;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const DisplayBar: React.FC<Props> = ({
  content = "",
  right = "",
  loading,
  onClick,
}) => {
  return (
    <div className={styles.displayBar} onClick={onClick}>
      {loading ? (
        <DisplayBarLoading />
      ) : (
        <>
          <div className={styles.content}>{content}</div>
          {/* <div className={styles.rightContent}>
            <div className={styles.rightBar}>{right}</div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default DisplayBar;
