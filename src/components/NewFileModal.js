import { useState } from "react";
import { StyledNewFileModal } from "./styles/NewFileModal.styled";
import { db } from "../firebase-config";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function NewFileModal() {
  // Storing the value of the document's new name in a state so it could be easily accessed by Firestore
  const [newFileName, setNewFileName] = useState("");

  // CRUD -> C
  const createFile = async (e) => {
    // Preventing the default form submission behavior
    e.preventDefault();
    document.querySelector(".new-file-modal-container").style.display = "none";
    // Generating an id for each new file created
    const id = uuidv4();
    // Declaring the reference to a particular document in Firebase (the variable name is a bit misleading)
    const filesCollectionRef = doc(db, "files", id);
    // Creating a new document in Firebase with a manually created id.
    // "addDoc" function would generated a unique id for each document for you. It wouldn't really be a
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
        onSubmit={(e) => {
          e.preventDefault();
          console.log(
            `a form for new file creation has been submitted! File name is: ${newFileName}`
          );
        }}
        className="new-file-modal"
      >
        <h4 className="file-title">Add File Title</h4>
        <input
          type="text"
          name="file-title"
          id="file-title"
          placeholder="File name"
          onChange={(e) => {
            setNewFileName(e.target.value);
          }}
          value={newFileName}
        />
        <button type="submit" onClick={createFile}>
          Create New File
        </button>
      </form>
    </StyledNewFileModal>
  );
}

export default NewFileModal;
