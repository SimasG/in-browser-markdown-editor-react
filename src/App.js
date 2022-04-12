import { useState, useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import DeleteModal from "./components/DeleteModal";
import NewFileModal from "./components/NewFileModal";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

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
  const [editorState, setEditorState] = useState("");
  const [files, setFiles] = useState([]);
  // Storing the value of the document's new name in a state so it could be easily accessed by Firestore
  const [newFileName, setNewFileName] = useState("");

  const createFile = () => {
    console.log(`New file name is ${newFileName}`);
  };

  // CRUD -> R
  useEffect(() => {
    // Creating a reference to a specific collection in Firestore. It allows to work with the data here.
    const filesCollectionRef = collection(db, "files");
    const getFiles = async () => {
      // "getDocs" returns documents from a specific collection
      const data = await getDocs(filesCollectionRef);
      // "doc.data" accesses the collection fields/documents without the id, that's why we
      // destructure it and add the id for each entry manually
      setFiles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFiles();
  }, []);

  const handleChange = (e) => {
    const text = e.target.value;
    setEditorState(text);
  };

  const renderText = (text) => {
    const __htmlDirty = marked.parse(text);
    const __html = DOMPurify.sanitize(__htmlDirty);
    return { __html };
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Sidebar
          files={files}
          setFiles={setFiles}
          setNewFileName={setNewFileName}
          newFileName={newFileName}
          createFile={createFile}
        />
        <Main
          handleChange={handleChange}
          renderText={renderText(editorState)}
        />
        <DeleteModal />
        <NewFileModal />
      </>
    </ThemeProvider>
  );
}

export default App;
