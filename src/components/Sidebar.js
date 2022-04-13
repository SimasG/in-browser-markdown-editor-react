import { useState } from "react";
import { StyledSidebar } from "./styles/Sidebar.styled";
import { db } from "../firebase-config";
import { updateDoc, doc, Timestamp } from "firebase/firestore";
import useFetchFiles from "../hooks/useFetchFiles";
import dayjs from "dayjs";

function Sidebar({ setId }) {
  const files = useFetchFiles();

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
          {files &&
            files.map((file) => {
              return (
                <div
                  className="current-document"
                  key={file.id}
                  onClick={() => setId(file.id)}
                >
                  <img
                    className="icon-document"
                    src="./assets/icon-document.svg"
                    alt=""
                  />
                  <div className="current-document-subsection">
                    <p className="date">
                      {dayjs(file.updatedAt.toDate(), "DD/MM/YYYY").toString()}
                    </p>
                    <input
                      className="document-name-input"
                      value={file.name}
                      onChange={(e) => {
                        // why is "newFileName" one letter behind "e.target.value"
                        updateFileName(file.id, e.target.value);
                      }}
                    ></input>
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
