import React from "react";
import styles from "./TagLine.module.css";
import { Character } from "../Character/Character";

type TagLineProps = {
  text: string;
};

const TagLine = ({ text }: TagLineProps) => {
  const wordSplit = text.split(" ");
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {wordSplit.map((string) => {
          const charSplit = string.split("");
          return (
            <h2 key={string}>
              {charSplit.map((character: string) => (
                <Character key={character} character={character} />
              ))}
            </h2>
          );
        })}
      </div>
      <div className={styles.subtitle}>Web Developer and Entrepreneur</div>
    </div>
  );
};

export { TagLine };
