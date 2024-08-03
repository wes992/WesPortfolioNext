import React from "react";
import { Header } from "../Header";
import styles from "./Experience.module.css";
import { Timeline } from "../Timeline";

const Experience = ({}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <Header number="03" title="Experience" />
        <Timeline />
      </div>
    </div>
  );
};

export { Experience };
