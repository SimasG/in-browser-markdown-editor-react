import { StyledMain } from "./styles/Main.styled";

function Main() {
  return (
    <StyledMain className="main">
      <section className="main-container">
        <section className="markdown-container">
          <div className="markdown-title-container">
            <h6 className="markdown-container-title">MARKDOWN</h6>
            <div>
              <img src="./assets/icon-hide-preview.svg" alt="" />
            </div>
          </div>
          <div className="markdown-subcontainer">
            <h1>Some markdown bs</h1>
          </div>
        </section>
        <div className="border"></div>
        <section className="preview-container">
          <div className="preview-title-container">
            <h6 className="preview-container-title">PREVIEW</h6>
            <div>
              <img src="./assets/icon-show-preview.svg" alt="" />
            </div>
          </div>
          <div className="preview-subcontainer">
            <h1>Some preview bs</h1>
          </div>
        </section>
      </section>
    </StyledMain>
  );
}

export default Main;
