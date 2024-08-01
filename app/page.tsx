"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useScrollEffect } from "./utils/eventListeners";
import { TagLine } from "./components/TagLine";
import { Skills } from "./components/Skills/Skills";
import { useRef } from "react";
import { Portfolio } from "./components/Portfolio";

export default function Home() {
  const ref = useRef(null);
  useScrollEffect(ref);
  return (
    <main className={styles.main}>
      <section className={styles.section} ref={ref} id="section1">
        <nav>
          <a href="#skills">skills</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
        <TagLine text={"I'm Wes Hampton."} />
      </section>
      <Skills />
      <section className={styles.section} id="portfolio">
        <Portfolio />
      </section>
      <section className={styles.section} id="section4">
        <h2>Section4</h2>
      </section>
    </main>
  );
}
