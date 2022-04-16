import { StyledSidebar } from "./styles/Sidebar.styled";
import { db } from "../firebase-config";
import { updateDoc, doc } from "firebase/firestore";
import useFetchFiles from "../hooks/useFetchFiles";
import dayjs from "dayjs";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Sidebar({ id, setId }) {
  const user = useContext(UserContext);
  const files = useFetchFiles(user?.uid);

  // CRUD -> U
  const updateFileName = async (id, newName) => {
    const fileDoc = doc(db, "files", id);
    const newFields = { name: newName };
    // should I put "await" for "updateDoc()"?
    updateDoc(fileDoc, newFields);
  };

  // const setActiveElement = () => {
  //   const docs = document.querySelectorAll(".current-document");
  //   console.log(docs);
  //   console.log(this);
  //   docs.forEach((doc) => {
  //     doc.style.backgroundColor = "#2B2D31";
  //     elem.style.backgroundColor = "#2B2D31";
  //   });
  // };

  const removeStyles = () => {
    const docs = document.querySelectorAll(".current-document");
    docs.forEach((doc) => {
      doc.style.backgroundColor = "#1D1F22";
    });
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
                  id={file.id}
                  onClick={() => {
                    setId(file.id);
                    removeStyles();
                    document.getElementById(
                      `${file.id}`
                    ).style.backgroundColor = "#2B2D31";

                    // console.log(`The ID of this file is: ${file.id}`);
                    // console.log(`The current ID is: ${id}`);
                    // if (file.id === id) {
                    //   document.querySelector(
                    //     `#${file.id}`
                    //   ).style.backgroundColor = "#2B2D31";
                    // }
                  }}
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
