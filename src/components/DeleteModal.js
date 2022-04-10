import { DeleteModalStyled } from "./styles/DeleteModal.styled";

function DeleteModal() {
  const removeModal = () => {
    document.querySelector(".delete-modal-container").style.display = "none";
  };

  const modalClick = (e) => {
    // e.preventDefault();
    // stops the event from bubbling and reaching the delete modal root (where modal's display would be set to "none")
    e.stopPropagation();
    // return false;
  };

  return (
    <DeleteModalStyled onClick={removeModal} className="delete-modal-container">
      <div onClick={modalClick} className="delete-modal">
        <h4>Delete this document?</h4>
        <p>
          Are you sure you want to delete the ‘welcome.md’ document and its
          contents? This action cannot be reversed.
        </p>
        <button>Confirm & Delete</button>
      </div>
    </DeleteModalStyled>
  );
}

export default DeleteModal;
