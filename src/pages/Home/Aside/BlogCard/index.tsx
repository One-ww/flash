import React from "react";

import Card from "@/components/Card";
import { cardUrl } from "@/utils/constant";
import { useTime } from "@/utils/hooks/useTime";

import styles from "./index.scss";

const BlogCard: React.FC = () => {
  const { timeText } = useTime();

  return (
    <Card className={styles.card}>
      <p className={styles.text}>
        {timeText}，<br />
        欢迎来到
        <br />
        我的<span className={styles.color}>个人博客</span>。
      </p>
      <img src={cardUrl} className={styles.avatar} />
    </Card>
  );
};

export default BlogCard;
