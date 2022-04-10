import { StyledSidebar } from "./styles/Sidebar.styled";

function Sidebar({ files, setFiles }) {
  const createNewDocument = () => {};
  return (
    <StyledSidebar className="sidebar">
      <p className="logo">MARKDOWN</p>
      <section className="document-section">
        <h6 className="my-documents-title">MY DOCUMENTS</h6>
        <button onClick={createNewDocument}>+ New Document</button>
        <div className="current-document-container">
          {files.map((file) => {
            return (
              <div className="current-document">
                <img
                  className="icon-document"
                  src="./assets/icon-document.svg"
                  alt=""
                />
                <div className="current-document-subsection">
                  <p className="date">Current Date</p>
                  <h6 className="document-name">{file.name}</h6>
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
