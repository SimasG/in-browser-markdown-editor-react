import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQxnClStgwhO5BWQzSyD6ifEssWr5PeMQ",
  authDomain: "in-browser-markdown-editor.firebaseapp.com",
  projectId: "in-browser-markdown-editor",
  storageBucket: "in-browser-markdown-editor.appspot.com",
  messagingSenderId: "946081802036",
  appId: "1:946081802036:web:42d121000baa2d2061e761",
  measurementId: "G-0DHHKFJCFR",
};

// Connecting the codebase with Firebase
const app = initializeApp(firebaseConfig);
// Connecting the codebase with the database
export const db = getFirestore(app);
