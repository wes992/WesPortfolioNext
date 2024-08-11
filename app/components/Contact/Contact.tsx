import React from "react";
import styles from "./Contact.module.css";
import { ContactForm, FormState } from "./ContactForm";
import Link from "next/link";
import { LinkedIn } from "../icons/LinkedIn";
import { GitHub } from "../icons/GitHub";

const Contact = ({}) => {
  const host = window.location.origin ?? "localhost:3000";
  const onSubmitForm = async (_: FormData, formData: FormData) => {
    const res = await fetch(`${host}/api/post-form`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data as FormState;
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.text}>Want to chat?</p>
          <p className={styles.text}>Need a proposal?</p>
          <p className={styles.text}>
            Send me a message or email me at
            <a href="mailto:productivejs@gmail.com"> productivejs@gmail.com</a>
          </p>
        </div>
        <ContactForm onSubmit={onSubmitForm} />
      </div>
      <div className={styles.footer}>
        <Link
          href={"https://www.linkedin.com/in/wes992/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn height="40px" width="40px" fill={"white"} />
        </Link>
        <Link
          href={"https://github.com/wes992"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub height="40px" width="40px" fill={"white"} />
        </Link>
      </div>
    </div>
  );
};

export { Contact };
