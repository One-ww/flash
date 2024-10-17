import React, { MouseEventHandler } from "react";

import Card from "@/components/Card";

import styles from "./index.scss";
import PostCardLoading from "./PostCardLoading";

interface Props {
  title?: string;
  content?: string;
  date?: number;
  tags?: string[];
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const PostCard: React.FC<Props> = ({
  title,
  content,
  date,
  tags,
  loading,
  onClick,
}) => {
  return (
    <Card className={styles.card} isStatic={true} onClick={onClick}>
      {loading ? (
        <PostCardLoading />
      ) : (
        <>
          <div className={styles.title}>{title}</div>
          <p className={styles.content}>
            {content!
              .replace(/<a(.*?)>(.*?)<\/a>/g, "$2")
              .replace(/[# |**|`|>]/g, "")}
          </p>
          <div className={styles.info}>
            {/* <span className={styles.date}>{dayjs(date!).format('YYYY-MM-DD')}</span> */}
            <div className={styles.tags}>
              {tags!.map((tag) => (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default PostCard;
