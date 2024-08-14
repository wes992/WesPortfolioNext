import React, { useEffect, useState } from "react";
import styles from "./TagLine.module.css";
import { TypeWriter } from "../TypeWriter";

type TagLineProps = {
  text: string;
  subtitle: string;
};

const TagLine = ({ text = "", subtitle = "" }: TagLineProps) => {
  const delay = 2000;
  const [showSubtitle, setShowSubtitle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowSubtitle(true);
    }, delay);
  }, [delay]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          <TypeWriter text={text} delay={100} forceHideCursor />
        </h2>
      </div>
      <div className={styles.subtitle}>
        {showSubtitle && <TypeWriter text={subtitle} />}
      </div>
    </div>
  );
};

export { TagLine };
