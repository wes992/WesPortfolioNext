import React, { useEffect, useState } from "react";
import { TimelineItem } from "./TimelineItem";
import styles from "./Timeline.module.css";
import { getTimelineItems } from "@/lib/firebase/timeline";
import { DocumentData } from "firebase/firestore";

const Timeline = ({ defaultColor = "rgba(var(--accent-color))" }) => {
  const [timelineItems, setTimelineItems] = useState<
    DocumentData[] | undefined
  >([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getTimelineItems();
      setTimelineItems(items);
    };

    fetchItems();
  }, []);

  return (
    <div className={styles.timeline}>
      {timelineItems?.map((item: any, index) => {
        const color = defaultColor || item.color;
        return <TimelineItem key={item.title} color={color} item={item} />;
      })}
    </div>
  );
};

export { Timeline };
