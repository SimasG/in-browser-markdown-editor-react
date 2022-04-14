import { StyledHeader } from "./styles/Header.styled";
import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase-config";
import toast from "react-hot-toast";
import useFetchFiles from "../hooks/useFetchFiles";
import { signInWithGoogle } from "../firebase-config";

const Header = ({ id, editorState }) => {
  const files = useFetchFiles();

  const toggleSlideMenu = () => {
    const sidebar = document.querySelector(".sidebar");
    const header = document.querySelector(".header");
    const main = document.querySelector(".main-container");

    if (header.classList.contains("open")) {
      header.classList.remove("open");
      sidebar.style.display = "none";
      sidebar.style.left = "-250px";
      header.style.left = "0";
      main.style.left = "0";
    } else {
      header.classList.add("open");
      sidebar.style.display = "block";
      sidebar.style.left = "0";
      header.style.left = "250px";
      main.style.left = "250px";
    }
  };

  // CRUD -> U
  const saveFile = async (e) => {
    const filesCollectionRef = doc(db, "files", id);
    await updateDoc(filesCollectionRef, {
      content: editorState,
      updatedAt: Timestamp.fromDate(new Date()),
    });
    toast.success("File successfully updated!");
  };

  return (
    <StyledHeader className="header open">
      <button className="burger-menu" onClick={toggleSlideMenu}>
        <img src="./assets/icon-menu.svg" alt="" />
      </button>
      <div className="current-file">
        <img src="./assets/icon-document.svg" alt="" />
        <p className="current-file-name">
          {/* Displaying the file name of the document whose id matches the current id state */}
          {files && id && `${files.find((file) => file.id === id).name}`}
        </p>
      </div>
      <div className="header-btn-section">
        <img
          onClick={() => {
            document.querySelector(".delete-modal-container").style.display =
              "flex";
          }}
          className="delete-img"
          src="./assets/icon-delete.svg"
          alt=""
        />
        {/* Storing the current file content state (editorState) on click */}
        <div onClick={saveFile} className="save-file-icon">
          <img src="./assets/icon-save.svg" alt="" />
        </div>
        <button
          onClick={() => {
            document.querySelector(".auth-modal-container").style.display =
              "flex";
          }}
          className="authentication-btn"
        >
          Sign Up
        </button>
        <h4>{localStorage.getItem("name")}</h4>
        <img src={localStorage.getItem("profilePic")} alt="" />
      </div>
    </StyledHeader>
  );
};

export default Header;
