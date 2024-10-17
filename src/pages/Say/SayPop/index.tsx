import dayjs from "dayjs";
import React from "react";

import { myAvatar70 } from "@/utils/constant";

import styles from "./index.scss";

interface Props {
  content?: string;
  date?: number;
  imgs?: string[];
  handlePreView: (url: string) => void;
}

const SayPop: React.FC<Props> = ({ content, date, imgs, handlePreView }) => (
  <div className={styles.sayItem}>
    <div className={styles.avatarBox}>
      <img src={myAvatar70} className={styles.avatar} />
    </div>

    <div className={styles.contentBox}>
      <div className={styles.content}>
        {content}
        <span className={styles.date}>
          {dayjs(date).format("YYYY-MM-DD HH:mm:ss")}
        </span>
        {!!imgs?.length && (
          <div className={styles.sayImgsBox}>
            {imgs.map((img, index) => (
              <div
                key={index}
                className={styles.sayImg}
                onClick={() => handlePreView(img)}
              >
                <img src={img} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default SayPop;
