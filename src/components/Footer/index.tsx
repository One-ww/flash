import React from "react";

import { source_github } from "@/utils/constant";

import styles from "./index.scss";

const Footer: React.FC = () => {
  const frameArr = [
    "React",
    "React Router",
    "Redux",
    "Webpack",
    "AntD",
    "ahooks",
  ];

  return (
    <footer className={styles.footer}>
      <span>
        个人博客系统
        <a
          href={source_github}
          target="_blank"
          rel="noreferrer"
          className={styles.text}
        >
          「github」
        </a>
      </span>
      <span>
        {/* <a
          href={icp_site}
          target="_blank"
          rel="noreferrer"
          className={styles.text}
        >
          {icp_no}
        </a> */}
      </span>
      <span>
        {frameArr.map((item, index) => (
          <span className={styles.siteFrame} key={index}>
            {item}
          </span>
        ))}
      </span>
    </footer>
  );
};

export default Footer;
