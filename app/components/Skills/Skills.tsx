"use client";

import React, { useEffect, useState } from "react";
import styles from "./Skills.module.css";
import { ProgressBar } from "../Progress";
import { Header } from "../Header";
import { getSkills } from "@/lib/firebase/skills";

const Skills = ({}) => {
  const [skills, setSkills] = useState<any[] | undefined>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getSkills();

      setSkills(items);
    };

    fetchItems();
  }, []);

  return (
    <div className={styles.container}>
      <Header
        number="01"
        title="Professional"
        subtitle="My skill set and proficiency"
      />

      <div className={styles.skillsContainer}>
        {skills?.map((skill) => {
          return (
            <div className={styles.skill} key={skill.name}>
              <div className={styles.name}>{skill.name}</div>
              <div className={styles.progress}>
                <ProgressBar percentage={skill.percentage} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Skills };
