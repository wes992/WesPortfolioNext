import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config";

const DB_NAME = process.env.NEXT_PUBLIC_DB_NAME;

if (!DB_NAME) {
  throw new Error(
    "You need to define a NEXT_PUBLIC_DB_NAME variable in your .env"
  );
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, DB_NAME);

export { db };
