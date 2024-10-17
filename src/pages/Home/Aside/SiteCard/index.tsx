import React from "react";

import Card from "@/components/Card";

import styles from "./index.scss";
import { useRunTime } from "./useRunTime";

const SiteCard: React.FC = () => {
  const { runTime } = useRunTime();

  return (
    <Card className={styles.card}>
      <div className={styles.item}>
        <span className={styles.key}>总浏览量</span>
        <span className={styles.value}>481次</span>
      </div>
      <div className={styles.item}>
        <span className={styles.key}>运行时间</span>
        <span className={styles.value}>{runTime}天</span>
      </div>
    </Card>
  );
};

export default SiteCard;
