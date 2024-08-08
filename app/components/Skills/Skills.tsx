"use client";

import React, { useRef } from "react";
import styles from "./Skills.module.css";
import { useScrollEffect } from "@/app/utils/eventListeners";
import { ProgressBar } from "../Progress";
import { Header } from "../Header";

const skills = [
  { title: "React", percentage: 90 },
  { title: "JS", percentage: 95 },
  { title: "Node", percentage: 80 },
  { title: "TS", percentage: 97 },
  { title: "GQL", percentage: 60 },
  { title: "Wix", percentage: 72 },
];

const Skills = ({}) => {
  // const skillsRef = useRef(null);
  // useScrollEffect(skillsRef, 0.9, { threshold: 0.0, offset: -20 });

  return (
    <div className={styles.container}>
      <Header
        number="01"
        title="Professional"
        subtitle="My skill set and proficiency"
      />

      <div className={styles.skillsContainer}>
        {skills.map((skill) => {
          return (
            <div className={styles.skill} key={skill.title}>
              <div className={styles.title}>{skill.title}</div>
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
