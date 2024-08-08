import React from "react";
import styles from "./Contact.module.css";
import { useFormState, useFormStatus } from "react-dom";

export type FormState = {
  message: string;
};

const ContactForm = ({ onSubmit = () => {} }) => {
  const [state, formAction] = useFormState<FormState>(onSubmit, {
    message: "",
  });
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className={styles.form}>
      {state.message}
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
      {/* <input type="text" />
    <input type="text" /> */}
      <label htmlFor="message">Message</label>
      <textarea name="message" rows={10} />
      <button type="submit" disabled={pending}>
        Submit
      </button>
    </form>
  );
};

export { ContactForm };
