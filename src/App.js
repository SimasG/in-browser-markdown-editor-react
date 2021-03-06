import { useState, useEffect, useContext } from "react";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import DeleteModal from "./components/DeleteModal";
import NewFileModal from "./components/NewFileModal";
import AuthModal from "./components/AuthModal";
import useFetchFiles from "./hooks/useFetchFiles";
import { isSignInWithEmailLink, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth, signInWithMagicLink } from "./firebase-config";

import { UserProvider, UserContext } from "./context/UserContext";

const theme = {
  width: {
    tablet: "768px",
    desktop: "1200px",
  },
  colors: {
    black1: "#151619",
    black2: "#1D1F22",
    black3: "#2B2D31",
    black4: "#35393F",
    gray1: "#5A6069",
    gray2: "#7C8187",
    gray3: "#C1C4CB",
    gray4: "#E4E4E4",
    gray5: "#F5F5F5",
    white: "#F5F5F5",
    brightOrange: "#E46643",
    lightOrange: "#F39765",
  },
};

function App() {
  const user = useContext(UserContext);
  const files = useFetchFiles(user?.uid);

  useEffect(() => {
    if (!user) return;
    // Specifying reference to a specific doc within a collection
    const ref = doc(db, "users", `${user.uid}`);
    // Create a new doc within "users" collection
    setDoc(ref, { uid: user.uid, email: user.email });
  }, [user]);

  const [editorState, setEditorState] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    // If the files haven't been fetched yet, stop the function
    if (!files || files.length === 0) return;
    // If id has a truthy state (means we clicked on one of the files), stop the function
    if (id) return;
    // Set the Id to the first element in the files array as the default view
    setId(files[0].id);
    // The useEffect functions reruns whenever there are changes in files (file.name/file.content) or
    // the id (not sure how ids could change, maybe when a new file is created and a new id generated?)
  }, [files, id]);

  // Listening to the magic link click
  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      signInWithMagicLink();
      // Clear URL
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <UserProvider>
          <GlobalStyles />
          {/* Passing in the editorState & id props to change the file name according to the state of id */}
          {/* Aka the file name in the header should reflect the currently viewed file */}
          <Header editorState={editorState} id={id} />
          {/* This is where we can set a new (active) id by clicking on the file */}
          <Sidebar setId={setId} id={id} />
          {/* Passing in the editorState & id props to change the file content according to the state of id */}
          {/* Passing in the setEditorState props to change the file content. */}
          <Main
            editorState={editorState}
            setEditorState={setEditorState}
            id={id}
          />
          <DeleteModal setId={setId} id={id} />
          <NewFileModal />
          <AuthModal />
          <Toaster />
        </UserProvider>
      </>
    </ThemeProvider>
  );
}

export default App;
