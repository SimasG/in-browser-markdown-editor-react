import { useState, useContext } from "react";
import { StyledNewFileModal } from "./styles/NewFileModal.styled";
import { db, auth } from "../firebase-config";
import { doc, setDoc, Timestamp } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";

function NewFileModal() {
  const user = useContext(UserContext);
  // Storing the value of the document's new name in a state so it could be easily accessed by Firestore
  const [newFileName, setNewFileName] = useState("");

  // CRUD -> C
  const createFile = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("Log in to create a file!");
    document.querySelector(".new-file-modal-container").style.display = "none";
    // Generating an id for each new file created
    const id = uuidv4();
    // Declaring the reference to a particular document in Firebase (the variable name is a bit misleading)
    const filesCollectionRef = doc(db, "users", user.uid, "files", id);
    // Creating a new document in Firebase with a manually created id.
    // "addDoc" function would have generated a unique id for each document for you. It wouldn't really be a
    // separate entry within the document though. That's why setting our own ids can be better.
    await setDoc(filesCollectionRef, {
      name: newFileName,
      content: "",
      id: id,
      updatedAt: Timestamp.fromDate(new Date()),
    });
    setNewFileName("");
  };

  return (
    <StyledNewFileModal
      onClick={() => {
        document.querySelector(".new-file-modal-container").style.display =
          "none";
      }}
      className="new-file-modal-container"
    >
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={(e) => createFile(e)}
        className="new-file-modal"
      >
        <h4 className="file-title">Add File Title</h4>
        <input
          type="text"
          name="file-title"
          placeholder="File name"
          onChange={(e) => {
            setNewFileName(e.target.value);
            // onAuthStateChanged(auth, (currentUser) => {
            //   if (currentUser) setUser(currentUser);
            // });
          }}
          value={newFileName}
        />
        <button type="submit">Create New File</button>
      </form>
    </StyledNewFileModal>
  );
}

export default NewFileModal;
