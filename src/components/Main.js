import { useEffect } from "react";
import { StyledMain } from "./styles/Main.styled";
import useWindowWidth from "../hooks/useWindowWidth";
import { marked } from "marked";
import DOMPurify from "dompurify";
import useFetchFiles from "../hooks/useFetchFiles";

function Main({ editorState, setEditorState, id }) {
  const handleChange = (e) => {
    const text = e.target.value;
    setEditorState(text);
  };

  const files = useFetchFiles();

  useEffect(() => {
    // If the files haven't been fetched yet, stop the function
    if (!files) return;
    // The file whose id matches the current id becomes the current file
    const currentFile = files.find((file) => file.id === id);
    // If the current file hasn't been fetched yet, stop the function
    if (!currentFile) return;
    setEditorState(currentFile.content);
    // The functions reruns whenever there are changes in the files (changed name, content, or id?),
    // id (changed id?) or setEditorState (changed markdown content)
  }, [files, id, setEditorState]);

  const renderText = (mdText) => {
    const __htmlDirty = marked.parse(mdText);
    const __html = DOMPurify.sanitize(__htmlDirty);
    return { __html };
  };

  const { width } = useWindowWidth();

  useEffect(() => {
    if (width < 768) {
      document.querySelector(".markdown-container").style.display = "block";
    }
  }, [width]);

  const togglePreview = () => {
    const markdownContainer = document.querySelector(".markdown-container");

    if (width < 768) {
      if (markdownContainer.classList.contains("open")) {
        document.querySelector(".markdown-container").classList.remove("open");
        document.querySelector(".markdown-container").style.display = "none";
        document.querySelector(".preview-container").style.display = "block";
      } else if (!markdownContainer.classList.contains("open")) {
        document.querySelector(".markdown-container").classList.add("open");
        document.querySelector(".markdown-container").style.display = "block";
        document.querySelector(".preview-container").style.display = "none";
      }
    }
  };

  return (
    <StyledMain className="main">
      <section className="main-container">
        <section className="markdown-container open">
          <div className="markdown-title-container">
            <h6 className="markdown-container-title">MARKDOWN</h6>
            <div onClick={togglePreview}>
              <img
                className="icon-show-preview icon-show-preview-markdown open"
                src="./assets/icon-show-preview.svg"
                alt=""
              />
            </div>
          </div>
          <div className="markdown-subcontainer">
            <textarea
              onChange={handleChange}
              value={editorState}
              className="markdown-text"
            />
          </div>
        </section>
        <div className="border"></div>
        <section className="preview-container" id="preview-container">
          <div className="preview-title-container">
            <h6 className="preview-container-title">PREVIEW</h6>
            <div onClick={togglePreview}>
              <img
                className="icon-show-preview icon-show-preview-preview open"
                src="./assets/icon-show-preview.svg"
                alt=""
              />
              <img
                className="icon-hide-preview icon-hide-preview-preview"
                src="./assets/icon-hide-preview.svg"
                alt=""
              />
            </div>
          </div>
          <div className="preview-subcontainer">
            <div dangerouslySetInnerHTML={renderText(editorState)}></div>
          </div>
        </section>
      </section>
    </StyledMain>
  );
}

export default Main;
