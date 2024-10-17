import { Popover } from 'antd';
import React, { ReactNode } from 'react';

import styles from './index.scss';

interface Props {
  isLink: boolean;
  link?: string;
  content?: ReactNode;
}

const IcoBtn: React.FC<Props> = ({ isLink, link, content, children }) => {
  return isLink ? (
    <a className={styles.socialBtn} href={link} target='_blank' rel='noreferrer'>
      {children}
    </a>
  ) : (
    <Popover
      trigger='hover'
      className={styles.socialBtn}
      content={content}
      overlayClassName={styles.card}
    >
      {children}
    </Popover>
  );
};

export default IcoBtn;
