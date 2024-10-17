import { useInterval } from 'ahooks';
import React from 'react';

import Card from '@/components/Card';

import styles from './index.scss';
import { useClock } from './useClock';

const ClockCard: React.FC = () => {
  const { hour, minute, second, runPerSecond } = useClock();
  useInterval(runPerSecond, 1000);

  return (
    <Card className={styles.card}>
      <div className={styles.dial}>
        <div className={styles.zero} />
        <div className={styles.six} />
        <div className={styles.three} />
        <div className={styles.nine} />
      </div>
      <div className={styles.container}>
        <div className={styles.dot} />
        <div
          className={styles.clockMinuteLine}
          style={{ transform: `rotateZ(${minute}deg)` }}
        />
        <div className={styles.clockHourLine} style={{ transform: `rotateZ(${hour}deg)` }} />
        <div
          className={styles.clockSecondLine}
          style={{ transform: `rotateZ(${second}deg)` }}
        />
      </div>
    </Card>
  );
};

export default ClockCard;
