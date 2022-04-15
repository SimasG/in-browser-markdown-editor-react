import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import toast from "react-hot-toast";
// "getAuth" basically tells Firestore that you will be using authentication
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
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

// Google Sign Up/In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const name = result.user.displayName;
    const profilePic = result.user.photoURL;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }
};

// Function to send the magic link to user
export const emailMagicLink = async (email) => {
  return await sendSignInLinkToEmail(auth, email, {
    url: `${window.location.origin}`,
    handleCodeInApp: true,
  }).then(() => {
    toast.success("A Magic Link Has Been Sent To Your Email!");
    window.localStorage.setItem("emailForSignIn", email);
  });
};

// Function to sign user in with the magic link
export const signInWithMagicLink = () => {
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem("emailForSignIn");

  // Don't understand this if statement
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again.
    email = window.prompt("Please provide your email for confirmation");
  }

  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // Delete email from local storage
      window.localStorage.removeItem("emailForSignIn");
      toast.success("You have successfully been signed in!");
    })
    .catch((error) => {
      console.error(error);
    });
};
