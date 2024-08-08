import React from "react";
import styles from "./Contact.module.css";
import { ContactForm, FormState } from "./ContactForm";

const Contact = ({}) => {
  const onSubmitForm = async (_: FormData, formData: FormData) => {
    const res = await fetch("http://localhost:3000/api/post-form", {
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
      <div className={styles.footer}></div>
    </div>
  );
};

export { Contact };
