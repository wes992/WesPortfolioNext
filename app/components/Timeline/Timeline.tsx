import React from "react";
import { timelineItems } from "./TimelineItems";
import { TimelineItem } from "./TimelineItem";
import styles from "./Timeline.module.css";

const Timeline = ({ defaultColor = "rgba(var(--accent-color))" }) => {
  return (
    <div className={styles.timeline}>
      {timelineItems.map((item) => {
        const color = item.color || defaultColor;
        return <TimelineItem key={item.id} color={color} item={item} />;
      })}
    </div>
  );
};

export { Timeline };
