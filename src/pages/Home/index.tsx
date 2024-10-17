import { useMount, useSafeState, useTitle } from "ahooks";
import React from "react";
import { connect } from "react-redux";

import { setNavShow } from "@/redux/actions";
import { siteTitle } from "@/utils/constant";
import useTop from "@/utils/hooks/useTop";

import Aside from "./Aside";
import styles from "./index.scss";
import Section from "./Section";

interface Props {
  setNavShow?: Function;
}

const getPoem = require("jinrishici");

const Home: React.FC<Props> = ({ setNavShow }) => {
  useTitle(siteTitle);
  useTop(setNavShow);

  const [poem, setPoem] = useSafeState("");
  console.log(poem);

  useMount(() => {
    getPoem.load(
      (res: {
        data: {
          content: string;
        };
      }) => setPoem(res.data.content)
    );
  });

  return (
    <>
      <div className={styles.body}>
        <Section />
        <Aside />
      </div>
    </>
  );
};

export default connect(() => ({}), { setNavShow })(Home);
