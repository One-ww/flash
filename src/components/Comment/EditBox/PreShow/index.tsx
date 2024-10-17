import classNames from "classnames";
import React from "react";
import sanitizeHtml from "sanitize-html";

import MarkDown from "@/components/MarkDown";

import styles from "./index.scss";

interface Props {
  closePre?: Function;
  content?: string;
  className?: string;
}

const PreShow: React.FC<Props> = ({ closePre, content, className }) => {
  const handleClose = () => closePre?.();

  return (
    <div className={classNames(styles.preShow, className)}>
      <div className={styles.closeBtn} onClick={handleClose}>
        ×
      </div>
      <MarkDown className={styles.preMarked} content={sanitizeHtml(content!)} />
    </div>
  );
};

export default PreShow;
