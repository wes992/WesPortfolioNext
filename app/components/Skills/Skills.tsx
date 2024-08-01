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
  const ref = useRef(null);
  useScrollEffect(ref, 0.5, { threshold: 0.1 });

  return (
    <section className={styles.section} id="skills" ref={ref}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <Header
            number="01"
            title="Professional"
            subtitle="My skill set and proficiency"
          />

          <table className={styles.chart}>
            <tbody>
              {skills.map((skill) => {
                return (
                  <tr key={skill.title}>
                    <td>{skill.title}</td>
                    <td>
                      <ProgressBar percentage={skill.percentage} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export { Skills };
