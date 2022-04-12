import { StyledSidebar } from "./styles/Sidebar.styled";
import { db } from "../firebase-config";
import { updateDoc, doc } from "firebase/firestore";
import { useState } from "react";

function Sidebar({ files }) {
  const [newFileName, setNewFileName] = useState("");

  const updateFileName = async (id, newName) => {
    const fileDoc = doc(db, "files", id);
    const newFields = { name: newName };
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
                  <h6
                    id={file.id}
                    className="document-name"
                    onClick={() => {
                      document.querySelector(`#${file.id}`).style.display =
                        "none";
                      document.querySelector(`#${file.id + 1}`).style.display =
                        "block";
                    }}
                  >
                    {file.name}
                  </h6>
                  <input
                    id={file.id + 1}
                    className="document-name-input"
                    placeholder={file.name}
                    onChange={(e) => {
                      // why is "newFileName" one letter behind "e.target.value"
                      setNewFileName(e.target.value);
                      updateFileName(file.id, e.target.value);
                    }}
                  ></input>
                  <button
                    className="update-btn"
                    onClick={() => {
                      updateFileName(file.id, newFileName);
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
