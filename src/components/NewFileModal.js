import { useState } from "react";
import { StyledNewFileModal } from "./styles/NewFileModal.styled";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

function NewFileModal() {
  // Storing the value of the document's new name in a state so it could be easily accessed by Firestore
  const [newFileName, setNewFileName] = useState("");

  // CRUD -> C
  const createFile = async (e) => {
    e.preventDefault();
    const filesCollectionRef = collection(db, "files");
    await addDoc(filesCollectionRef, { name: newFileName });
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
            console.log(newFileName);
          }}
        />
        <button type="submit" onClick={createFile}>
          Create New File
        </button>
      </form>
    </StyledNewFileModal>
  );
}

export default NewFileModal;
