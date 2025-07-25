//src/fiebase.js

//this lines import the initializeapp functions form the firebase library
//this is the main function we need to connect to our pronect
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app"

//this is the coonfiguration object.
//instead of wtriting our secretss keys here , we are telling our to get them 
// from the replit secrets vault .vite make them available under //`import.meta.env`

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

//THIS IS the line that actually performs the handshake 
// it takes our secret configuration and establishes the connection to our //firebase project 
const app = initializeApp(firebaseConfig);

//we export the 'app' variable so that other parts of our application 
// (like for logic or database) can use this same connection
export default app;