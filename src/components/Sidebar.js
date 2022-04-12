import { StyledSidebar } from "./styles/Sidebar.styled";
import { db } from "../firebase-config";
import { updateDoc, doc } from "firebase/firestore";

function Sidebar({ files }) {
  const updateFileName = async (id) => {
    const fileDoc = doc(db, "files", id);
    // const newName = "some input bs";
    const newFields = { name: "new-file.md" };
    // should I put "await" for "updateDoc()"?
    updateDoc(fileDoc, newFields);
  };

  return (
    <StyledSidebar className="sidebar">
      <p className="logo">MARKDOWN</p>
      <section className="document-section">
        <h6 className="my-documents-title">MY DOCUMENTS</h6>
        <button
          onClick={() => {
            document.querySelector(".new-file-modal-container").style.display =
              "flex";
          }}
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
                  <button
                    onClick={() => {
                      updateFileName(file.id, file.name);
                    }}
                  >
                    Update
                  </button>
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
