import React from "react";

import styles from "./index.scss";

interface Props {
  tags: string[];
}

const PostTags: React.FC<Props> = ({ tags }) => {
  return (
    <div className={styles.articleTags}>
      {tags.map((item, index) => (
        <span className={styles.articleTag} key={index}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default PostTags;
