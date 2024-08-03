"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useScrollEffect } from "./utils/eventListeners";
import { TagLine } from "./components/TagLine";
import { Skills } from "./components/Skills/Skills";
import { useRef } from "react";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import Link from "next/link";
import { Contact } from "./components/Contact";
import { Logo } from "./components/icons/Logo";

export default function Home() {
  const landingRef = useRef(null);
  useScrollEffect(landingRef);

  // const skillsRef = useRef(null);
  // useScrollEffect(skillsRef, 0.1, { threshold: 0.1 });
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <Logo height="40px" width="40px" color={"rgb(var(--accent-color))"} />
        </Link>
        <div className={styles.links}>
          <Link href="#skills">skills</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#experience">experience</Link>
          <Link href="#contact">contact</Link>
        </div>
      </nav>
      <main className={styles.main}>
        <section className={styles.section} ref={landingRef} id="section1">
          <TagLine text={"I'm Wes Hampton."} />
        </section>
        <section className={styles.section} id="skills">
          <Skills />
        </section>
        <section className={styles.section} id="portfolio">
          <Portfolio />
        </section>
        <section className={styles.section} id="experience">
          <Experience />
        </section>
        <section className={styles.section} id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
