import { StyledMain } from "./styles/Main.styled";

function Main() {
  return (
    <StyledMain className="main">
      <section className="markdown-container">
        <h6 className="markdown-container-title">MARKDOWN</h6>
        <div className="markdown-subcontainer"></div>
      </section>
      <div className="border"></div>
      <section className="preview-container">
        <div className="preview-title-container">
          <h6 className="preview-container-title">PREVIEW</h6>
          <div>
            <img src="./assets/icon-show-preview.svg" alt="" />
          </div>
        </div>
        <div className="preview-subcontainer"></div>
      </section>
    </StyledMain>
  );
}

export default Main;
