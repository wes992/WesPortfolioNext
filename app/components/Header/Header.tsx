import React from "react";
import styles from "./Header.module.css";
const Header = ({ number = "0", title = "", subtitle = "" }) => {
  return (
    <div className={styles.header}>
      <h2>
        <span>{number}</span> {title}
      </h2>
      <h4>{subtitle}</h4>
    </div>
  );
};

export { Header };
