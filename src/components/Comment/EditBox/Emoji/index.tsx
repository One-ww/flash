import "./index.custom.scss";

import { Popover } from "antd";
import classNames from "classnames";
import React, { memo } from "react";

import EmojiItem from "./EmojiItem";
import styles from "./index.scss";
import { useEmoji } from "./useEmoji";

interface EmojiType {
  className: string;
  emojiStr: string[];
  show: string;
}

const Emoji: React.FC = () => {
  const { emojiPeople, emojiNature, emojiSymbol, emojiFood } = useEmoji();

  const emojiData: EmojiType[] = [
    {
      className: "",
      emojiStr: emojiPeople,
      show: "😜",
    },
    {
      className: styles.emoji2,
      emojiStr: emojiNature,
      show: "✉️",
    },
    {
      className: styles.emoji3,
      emojiStr: emojiSymbol,
      show: "🆗",
    },
    {
      className: styles.emoji4,
      emojiStr: emojiFood,
      show: "🍎",
    },
  ];

  return (
    <>
      {emojiData.map((item, index) => (
        <Popover
          key={index}
          className={classNames(styles.emojiBtn, item.className)}
          overlayClassName={styles.emojiContent}
          placement="bottom"
          content={<EmojiItem emojiStr={item.emojiStr} />}
          trigger="click"
        >
          <div>{item.show}</div>
        </Popover>
      ))}
    </>
  );
};

export default memo(Emoji);
