import React, { useRef } from "react";
import { Header } from "../Header";
import styles from "./Experience.module.css";
import { Timeline } from "../Timeline";
import { useScrollEffect } from "@/app/utils/eventListeners";

const Experience = ({}) => {
  const ref = useRef(null);
  useScrollEffect(ref, 0.5, { offset: -110 });

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.overlay}>
        <Header number="03" title="Experience" />
        <Timeline />
      </div>
    </div>
  );
};

export { Experience };
