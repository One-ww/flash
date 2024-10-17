import classNames from 'classnames';
import React from 'react';

import styles from './index.scss';

interface Props {
  state: boolean;
  toggle: Function;
  setLeft: Function;
  setRight: Function;
}

const Switch: React.FC<Props> = ({ state, toggle, setLeft, setRight }) => {
  return (
    <div className={styles.switch}>
      <div
        className={classNames(styles.site, { [styles.titleOff]: state })}
        onClick={() => setLeft()}
      >
        关于本站
      </div>
      <div className={styles.box} onClick={() => toggle()}>
        <div className={classNames(styles.btn, { [styles.isMe]: state })} />
      </div>
      <div
        className={classNames(styles.me, { [styles.titleOff]: !state })}
        onClick={() => setRight()}
      >
        关于我
      </div>
    </div>
  );
};

export default Switch;
