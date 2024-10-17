import React from "react";
import { Outlet } from "react-router-dom";

import Layout from "@/components/Layout";
import worksData from "@/data/showData/worksData.json";

import { Title } from "../titleConfig";
import styles from "./index.scss";
import ShowItem from "./ShowItem";

interface ShowType {
  _id: string;
  cover: string;
  link: string;
  name: string;
  descr: string;
}

const Show: React.FC = () => {
  const data = worksData.data;

  return (
    <Layout title={Title.Show} className={styles.showBox}>
      {data?.data.map((item: ShowType) => (
        <ShowItem
          key={item._id}
          cover={item.cover}
          link={item.link}
          name={item.name}
          descr={item.descr}
        />
      ))}
      <Outlet />
    </Layout>
  );
};

export default Show;
