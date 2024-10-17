import React from "react";

import { useTime } from "@/utils/hooks/useTime";

import styles from "./index.scss";
import { useSite } from "./useSite";

const MsgInfo: React.FC = () => {
  const { timeText } = useTime();
  const { mySite } = useSite();

  return (
    <>
      <div className={styles.info}>
        <div>
          {timeText}，我叫<span className={styles.hoverName}>Flash</span>，
        </div>
        <div>欢迎来到我的博客!</div>
        <div>可以在这里留言，</div>
        <div className={styles.hoverName}>交换友链。</div>
      </div>
      <div className={styles.siteLink}>
        <div className={styles.link}>本站链接：</div>
        {mySite.map(
          (
            item: {
              key: string;
              value: string;
            },
            index
          ) => (
            <div key={index}>
              <span>{item.key}:</span>
              <span className={styles.value}>{item.value}</span>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default MsgInfo;
