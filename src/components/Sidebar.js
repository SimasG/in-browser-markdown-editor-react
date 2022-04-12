import { StyledSidebar } from "./styles/Sidebar.styled";

function Sidebar({ files, newFileName, setNewFileName, createFile }) {
  const openAddFileModal = () => {
    document.querySelector(".new-file-modal-container").style.display = "flex";
  };

  return (
    <StyledSidebar className="sidebar">
      <p className="logo">MARKDOWN</p>
      <section className="document-section">
        <h6 className="my-documents-title">MY DOCUMENTS</h6>
        <button
          onClick={() => {
            openAddFileModal();
            // setNewFileName("doggo");
            // console.log(newFileName);
          }}
          setNewFileName={setNewFileName}
          newFileName={newFileName}
          // onCLick={() => {
          //   console.log(`setNewFileName is: ${setNewFileName}`);
          // }}
          // createFile={createFile}
        >
          + New Document
        </button>
        <div className="current-document-container">
          {files.map((file) => {
            return (
              <div className="current-document" key={file.id}>
                <img
                  className="icon-document"
                  src="./assets/icon-document.svg"
                  alt=""
                />
                <div className="current-document-subsection">
                  <p className="date">Current Date</p>
                  <h6 className="document-name">{file.name}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </StyledSidebar>
  );
}

export default Sidebar;
