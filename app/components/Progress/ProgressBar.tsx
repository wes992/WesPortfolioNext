import React from "react";
import styles from "./ProgressBar.module.css";
const ProgressBar = ({ percentage = 10 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        <div className={styles.bar} style={{ width: `${percentage}%` }}></div>
      </div>
      <h5 className={styles.percentage}>{`${percentage}%`}</h5>
    </div>
  );
};

export { ProgressBar };
