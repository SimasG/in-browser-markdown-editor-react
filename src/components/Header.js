import { StyledHeader } from "./styles/Header.styled";
import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import toast from "react-hot-toast";
import useFetchFiles from "../hooks/useFetchFiles";
import { signOut } from "firebase/auth";

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

  const file = files && id && files.find((file) => file.id === id);

  return (
    <StyledHeader className="header open">
      <button className="burger-menu" onClick={toggleSlideMenu}>
        <img src="./assets/icon-menu.svg" alt="" />
      </button>
      {file && (
        <div className="current-file">
          <img src="./assets/icon-document.svg" alt="" />
          <p className="current-file-name">{file.name}</p>
        </div>
      )}

      <div className="header-btn-section">
        <img
          className="delete-img"
          onClick={() => {
            document.querySelector(".delete-modal-container").style.display =
              "flex";
          }}
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
          className="btn sign-up-btn"
        >
          Sign Up
        </button>
        <button className="btn sign-in-btn">Sign In</button>
        <button
          onClick={() => {
            signOut(auth).then(() => {
              toast.success("Signed out!");
            });
          }}
          className="btn sign-out-btn"
        >
          Sign Out
        </button>
        {/* If a user is signed up, show the following JSX. */}
        {auth.currentUser && (
          <>
            <h4 className="user-name">{auth.currentUser.displayName}</h4>
            <img
              className="user-profile-pic"
              src={auth.currentUser.photoURL}
              alt=""
            />
          </>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
