import { DeleteModalStyled } from "./styles/DeleteModal.styled";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import useFetchFiles from "../hooks/useFetchFiles";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function DeleteModal({ id, setId }) {
  const user = useContext(UserContext);
  const files = useFetchFiles(user?.uid);

  const removeModal = () => {
    document.querySelector(".delete-modal-container").style.display = "none";
  };

  const modalClick = (e) => {
    // e.preventDefault();
    // stops the event from bubbling and reaching the delete modal root (where modal's display would be set to "none")
    e.stopPropagation();
    // return false;
  };

  const deleteFile = async (currentId) => {
    const fileDoc = doc(db, "files", currentId);
    setId(files[0].id);
    removeModal();
    await deleteDoc(fileDoc);
  };

  return (
    <DeleteModalStyled onClick={removeModal} className="delete-modal-container">
      <div onClick={modalClick} className="delete-modal">
        <h4>Delete this document?</h4>
        <p>
          Are you sure you want to delete the ‘welcome.md’ document and its
          contents? This action cannot be reversed.
        </p>
        <button onClick={() => deleteFile(id)}>Confirm & Delete</button>
      </div>
    </DeleteModalStyled>
  );
}

export default DeleteModal;
