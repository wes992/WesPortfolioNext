// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6bnthf38xtOT-TjtQwsUFPYhuFD2R3b4",
  authDomain: "wesportfolio.firebaseapp.com",
  databaseURL: "https://wesportfolio.firebaseio.com",
  projectId: "wesportfolio",
  storageBucket: "wesportfolio.appspot.com",
  messagingSenderId: "517223166632",
  appId: "1:517223166632:web:0a916ec277f9f3f9f1489d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "portfolio-db");

export { db };
