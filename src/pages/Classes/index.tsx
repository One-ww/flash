import React from "react";
import { useNavigate } from "react-router-dom";

import Layout from "@/components/Layout";
import classesData from "@/data/articleData/classes.json";

import { Title } from "../titleConfig";
import ClassBar from "./ClassBar";
import styles from "./index.scss";

interface ClassType {
  _id: string;
  class: string;
  count: number;
}

const Classes: React.FC = () => {
  const navigate = useNavigate();

  // const { data, loading } = useRequest(getData, {
  //   defaultParams: [DB.Class],
  //   retryCount: 3,
  //   cacheKey: `Classes-${DB.Class}`,
  //   staleTime
  // })

  const data = classesData.data;

  return (
    <Layout title={Title.Classes} className={styles.classBox} rows={8}>
      {data?.data.map((item: ClassType) => (
        <ClassBar
          className={styles.classItem}
          key={item._id}
          content={item.class}
          num={item.count}
          onClick={() =>
            navigate(`/artDetail?class=${encodeURIComponent(item.class)}`)
          }
        />
      ))}
    </Layout>
  );
};

export default Classes;
