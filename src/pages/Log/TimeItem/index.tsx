import dayjs from "dayjs";
import React from "react";

import styles from "./index.scss";

interface Props {
  date?: number;
  logContent?: string[];
}

const TimeItem: React.FC<Props> = ({ date, logContent }) => {
  return (
    <div className={styles.item}>
      <div className={styles.time}>
        <div className={styles.dot}>
          <div className={styles.dotIn} />
        </div>
        {dayjs(date).format("YYYY-MM-DD")}
      </div>

      <ul className={styles.content}>
        {logContent?.map((log, index) => (
          <li key={index} className={styles.timeLi}>
            {log}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeItem;
