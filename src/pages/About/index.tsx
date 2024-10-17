import { useToggle } from "ahooks";
import React from "react";

import Layout from "@/components/Layout";
// 数据
import aboutData from "@/data/aboutData/aboutData.json";

import { Title } from "../titleConfig";
import AboutMe from "./AboutMe";
import AboutSite from "./AboutSite";
import styles from "./index.scss";
import Switch from "./Switch";

const About: React.FC = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();

  const data = aboutData;

  return (
    <Layout title={Title.About}>
      <Switch
        state={state}
        toggle={toggle}
        setLeft={setLeft}
        setRight={setRight}
      />
      <AboutMe
        className={state ? "" : styles.hidden}
        content={data?.about.data[1].content}
      />
      <AboutSite
        className={state ? styles.hidden : ""}
        content={data?.about.data[0].content}
        classes={data?.classes.data}
        artSum={data?.artSum.total}
      />
    </Layout>
  );
};

export default About;
