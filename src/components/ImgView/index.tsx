import classNames from "classnames";
import React, { MouseEventHandler } from "react";

import styles from "./index.scss";

interface Props {
  viewUrl: string;
  isViewShow: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const ImgView: React.FC<Props> = ({ viewUrl, isViewShow, onClick }) => {
  return (
    <div
      className={classNames(styles.view, { [styles.show]: isViewShow })}
      onClick={onClick}
    >
      <img className={styles.img} src={viewUrl} />
    </div>
  );
};

export default ImgView;
