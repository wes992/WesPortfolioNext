"use client";
import styles from "./page.module.css";
import { useScrollEffect } from "./utils/eventListeners";
import { TagLine } from "./components/TagLine";
import { Skills } from "./components/Skills/Skills";
import { useRef } from "react";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Nav } from "./components/Nav";

export default function Home() {
  const landingRef = useRef(null);
  const skillsRef = useRef(null);
  useScrollEffect(landingRef);
  useScrollEffect(skillsRef, 0.8);

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <section className={styles.section} ref={landingRef} id="section1">
          <div className={styles.overlay}>
            <TagLine
              text={"I'm Wes Hampton."}
              subtitle={"Web Developer and Entrepreneur"}
            />
          </div>
        </section>
        <section className={styles.section} id="skills" ref={skillsRef}>
          <div className={styles.overlay}>
            <Skills />
          </div>
        </section>
        <section className={styles.section} id="portfolio">
          <div className={styles.overlay}>
            <Portfolio />
          </div>
        </section>
        <section className={styles.section} id="experience">
          <div className={styles.overlay}>
            <Experience />
          </div>
        </section>
        <section className={styles.section} id="contact">
          <div className={styles.overlay}>
            <Contact />
          </div>
        </section>
      </main>
    </>
  );
}
