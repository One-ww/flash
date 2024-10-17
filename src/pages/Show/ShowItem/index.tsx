import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.scss";

interface Props {
  cover?: string;
  link: string;
  name?: string;
  descr?: string;
}

const ShowItem: React.FC<Props> = ({ cover, link, name, descr }) => {
  return (
    <div
      style={{ backgroundImage: `url(${cover})` }}
      className={styles.showItem}
    >
      <NavLink to={link}>
        <div className={styles.link}>
          <div className={styles.title}>
            <span>{name}</span>
          </div>
          <div className={styles.descr}>{descr}</div>
          <div className={styles.mask} />
        </div>
      </NavLink>
    </div>
  );
};

export default ShowItem;
