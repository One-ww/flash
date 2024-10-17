import { Skeleton } from "antd";
import classNames from "classnames";
import React, { MouseEventHandler } from "react";

import styles from "./index.scss";

interface Props {
  className?: string;
  loading?: boolean;
  isStatic?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<Props> = ({
  children,
  className,
  loading,
  isStatic,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        styles.card,
        { [styles.center]: loading },
        { [styles.active]: !isStatic },
        className
      )}
      onClick={onClick}
    >
      {loading ? <Skeleton paragraph={{ rows: 1 }} /> : children}
    </div>
  );
};

export default Card;
