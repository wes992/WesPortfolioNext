import React from "react";
import styles from "./Timeline.module.css";
import { timelineItemType } from "./TimelineItems";
import { Office } from "../icons/Office";

type TimelineItemProps = {
  color: string;
  item: timelineItemType;
};

const TimelineItem = ({ color = "", item }: TimelineItemProps) => {
  return (
    <div className={styles.timelineItem}>
      <Office
        className={styles.icon}
        height="40px"
        width="40px"
        style={{ backgroundColor: color }}
      />
      <CardContent item={item} />
    </div>
  );
};

export { TimelineItem };

const CardContent = ({ item }: { item: any }) => {
  const date = `${item.dates.from} - ${item.dates.to}`;
  const location = `${item.location.city},${item.location.state}`;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.date}>{date}</div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.location}>
        {location}
        <span>|{date}</span>
      </div>
      <div className={styles.description}>{item.description}</div>
      <div className={styles.techStack}>
        {item.technologies.map((tech: any, index: number) => (
          <span key={index + tech} className={styles.techChip}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
