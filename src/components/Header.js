import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
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

  const addDeleteModal = () => {
    document.querySelector(".delete-modal-container").style.display = "flex";
  };

  return (
    <StyledHeader className="header open">
      <button className="burger-menu" onClick={toggleSlideMenu}>
        <img src="./assets/icon-menu.svg" alt="" />
      </button>
      <div className="current-file">
        <img src="./assets/icon-document.svg" alt="" />
        <p className="current-file-name">welcome.md</p>
      </div>
      <img
        onClick={addDeleteModal}
        className="delete"
        src="./assets/icon-delete.svg"
        alt=""
      />
      <div className="save-file-icon">
        <img src="./assets/icon-save.svg" alt="" />
      </div>
    </StyledHeader>
  );
};

export default Header;
