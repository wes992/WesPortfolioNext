const { API_KEY, AUTH_DOMAIN, DB_URL, APP_ID } = process.env;

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DB_URL,
  projectId: "wesportfolio",
  storageBucket: "wesportfolio.appspot.com",
  messagingSenderId: "517223166632",
  appId: APP_ID,
};
