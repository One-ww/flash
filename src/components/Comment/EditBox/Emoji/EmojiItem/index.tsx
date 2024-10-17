import { message } from "antd";
import copy from "copy-to-clipboard";
import React from "react";

import styles from "./index.scss";

interface Props {
  emojiStr: string[];
}

const EmojiItem: React.FC<Props> = ({ emojiStr }) => {
  return (
    <>
      {emojiStr.map((item: string, index: number) => (
        <div
          className={styles.emoji}
          key={index}
          onClick={() => {
            copy(item) && message.success("已复制到剪切板!");
          }}
        >
          {item}
        </div>
      ))}
    </>
  );
};

export default EmojiItem;
