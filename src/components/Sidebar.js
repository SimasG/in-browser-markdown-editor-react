import { StyledSidebar } from "./styles/Sidebar.styled";

function Sidebar() {
  return (
    <StyledSidebar className="sidebar">
      <span className="logo">MARKDOWN</span>
      <section className="document-section">
        <h6>MY DOCUMENTS</h6>
        <button>+ New Document</button>
        <div className="current-document-container">
          <div className="current-document">
            <img
              className="icon-document"
              src="./assets/icon-document.svg"
              alt=""
            />
            <div className="current-document-subsection">
              <p className="date">01 April 2022</p>
              <h6 className="document-name">welcome.md</h6>
            </div>
          </div>
        </div>
      </section>
    </StyledSidebar>
  );
}

export default Sidebar;
