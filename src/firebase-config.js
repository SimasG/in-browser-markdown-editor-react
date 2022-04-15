import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// "getAuth" basically tell Firestore that you will be using authentication
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

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

// Creating an instance of the Google provider object
export const provider = new GoogleAuthProvider();

// Declaring that our application "app" wll have authentication. "auth" will represent all the info related to
// the user currently authenticated by our app & see which user is currently authenticated
export const auth = getAuth(app);

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;

    const name = result.user.displayName;
    const profilePic = result.user.photoURL;
    // localStorage.setItem("name", name);
    // localStorage.setItem("profilePic", profilePic);
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }
};

// Sign Out
export const signOutUser = () => {
  signOut(auth).then(() => {
    console.log("does this work?");
  });
};

// Log In
