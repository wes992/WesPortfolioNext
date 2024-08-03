import React from "react";

import styles from "./Portfolio.module.css";
import { Header } from "../Header";

const Portfolio = ({}) => {
  return (
    <div className={styles.container}>
      <Header number={"02"} title="Portfolio" subtitle="My Latest Work:" />
      <div className={styles.projects}>
        <div className={styles.project} style={{ backgroundColor: "white" }} />
        <div className={styles.project} style={{ backgroundColor: "red" }} />
        <div className={styles.project} style={{ backgroundColor: "blue" }} />
      </div>
    </div>
  );
};

export { Portfolio };
