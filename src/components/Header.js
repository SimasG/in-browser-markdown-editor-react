import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
  const toggleSlideMenu = () => {
    const sidebar = document.querySelector(".sidebar");
    const header = document.querySelector(".header");
    if (header.classList.contains("open")) {
      header.classList.remove("open");
      sidebar.style.width = "0";
      sidebar.style.display = "none";
      header.style.marginLeft = "0";
    } else {
      header.classList.add("open");
      sidebar.style.width = "250px";
      sidebar.style.display = "block";
      header.style.marginLeft = "250px";
    }
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
      <img className="delete" src="./assets/icon-delete.svg" alt="" />
      <div className="save-file-icon">
        <img src="./assets/icon-save.svg" alt="" />
      </div>
    </StyledHeader>
  );
};

export default Header;
