import React from "react";
import styles from "./Timeline.module.css";
import { timelineItemType } from "./TimelineItems";
import { Office } from "../icons/office";

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

const CardContent = ({ item }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.date}>{item.date}</div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.location}>
        {item.location}
        <span>|{item.date}</span>
      </div>
      <div className={styles.description}>{item.description}</div>
      <div className={styles.techStack}>
        {item.tech.map((tech, index) => (
          <span key={index + tech} className={styles.techChip}>
            {tech}
          </span>
        ))}
      </div>
      {/* <Link
    href="#"
    className={styles.link}
    style={{ backgroundColor: color }}
  >
    {item.buttonText}
  </Link> */}
    </div>
  );
};
