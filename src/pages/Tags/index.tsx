import React from "react";
import { useNavigate } from "react-router-dom";

import Layout from "@/components/Layout";
import tagsData from "@/data/articleData/tags.json";

import { Title } from "../titleConfig";
import styles from "./index.scss";

interface TagType {
  _id: string;
  _openid: string;
  tag: string;
}

const Tags: React.FC = () => {
  const navigate = useNavigate();

  const data = tagsData.data;

  return (
    <Layout title={Title.Tags} className={styles.tagsBox} rows={3}>
      {data?.data.map((item: TagType) => (
        <span
          className={styles.tagItem}
          key={item._id}
          onClick={() =>
            navigate(`/artDetail?tag=${encodeURIComponent(item.tag)}`)
          }
        >
          {item.tag}
        </span>
      ))}
    </Layout>
  );
};

export default Tags;
