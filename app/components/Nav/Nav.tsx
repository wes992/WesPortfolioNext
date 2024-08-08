"use client";

import React, { useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import { Logo } from "../icons/Logo";

const links = [
  {
    id: "skills",
    text: "Skills",
    route: "#skills",
  },
  {
    id: "portfolio",
    text: "Portfolio",
    route: "#portfolio",
  },
  {
    id: "experience",
    text: "Experience",
    route: "#experience",
  },
  {
    id: "contact",
    text: "Contact",
    route: "#contact",
  },
];

const Hamburger = ({ open = false, onClick = () => {} }) => {
  return (
    <div className={styles.hamburger} onClick={onClick}>
      <div className={`${styles.line} ${open && styles.open}`}></div>
      <div className={`${styles.line} ${open && styles.open}`}></div>
      <div className={`${styles.line} ${open && styles.open}`}></div>
    </div>
  );
};

const Nav = ({}) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <Hamburger open={open} onClick={() => setOpen((prev) => !prev)} />
      {/* <Link href="/">
        <Logo height="40px" width="40px" color={"rgb(var(--accent-color))"} />
      </Link> */}
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.route}>
            {link.text}
          </Link>
        ))}
      </div>

      <div className={`${styles.mobileLinks} ${open && styles.open}`}>
        {links.map((link) => (
          <Link key={link.id} href={link.route} onClick={() => setOpen(false)}>
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export { Nav };
