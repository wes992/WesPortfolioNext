import React from "react";
import { Header } from "../Header";
import styles from "./Contact.module.css";

const Contact = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          corrupti ipsum dicta sequi sed, at voluptatum quod, consectetur
          asperiores illo aut ipsa! Facilis quas magnam esse maxime earum. Sunt,
          dicta.
        </div>
        <div className={styles.form}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          corrupti ipsum dicta sequi sed, at voluptatum quod, consectetur
          asperiores illo aut ipsa! Facilis quas magnam esse maxime earum. Sunt,
          dicta.
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export { Contact };
