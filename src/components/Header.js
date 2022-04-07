import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <button className="burger-menu">
        {/* <img src="../../public/assets/icon-menu.svg" alt="" /> */}
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
