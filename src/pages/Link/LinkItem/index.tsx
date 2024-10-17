import classNames from 'classnames';
import React from 'react';

import { smallLoadingUrl } from '@/utils/constant';
import { useLazyImg } from '@/utils/hooks/useLazyImg';

import styles from './index.scss';

interface Props {
  link?: string;
  avatar?: string;
  name?: string;
  descr?: string;
}

const LinkItem: React.FC<Props> = ({ link, avatar, name, descr }) => {
  const { imgRef, imgUrl } = useLazyImg(avatar!, smallLoadingUrl);

  return (
    <div className={styles.item}>
      <a href={link} rel='noreferrer' target='_blank' className={styles.link}>
        <div ref={imgRef} className={styles.left}>
          <img
            src={imgUrl}
            className={classNames({
              [styles.avatar]: imgUrl !== smallLoadingUrl,
              [styles.loading]: imgUrl === smallLoadingUrl
            })}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{name}</div>
          <div className={styles.descr}>{descr}</div>
        </div>
      </a>
    </div>
  );
};

export default LinkItem;
