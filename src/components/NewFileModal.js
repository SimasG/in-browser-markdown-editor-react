import { StyledNewFileModal } from "./styles/NewFileModal.styled";

function NewFileModal({ newFileName, setNewFileName, createFile }) {
  const removeModal = () => {
    document.querySelector(".new-file-modal-container").style.display = "none";
  };

  const modalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <StyledNewFileModal
      onClick={removeModal}
      className="new-file-modal-container"
    >
      <div onClick={modalClick} className="new-file-modal">
        <h4 className="file-title">Add File Title</h4>
        <input
          type="text"
          name="file-title"
          id="file-title"
          placeholder="File name"
          onChange={(e) => {
            // console.log(e.target.value);
            setNewFileName(e.target.value);
            console.log(newFileName);
          }}
        />
        <button onClick={createFile}>Create New File</button>
      </div>
    </StyledNewFileModal>
  );
}

export default NewFileModal;
