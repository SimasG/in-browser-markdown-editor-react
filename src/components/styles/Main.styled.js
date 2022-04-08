import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.5s;
  .markdown-container {
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.gray5};
    .markdown-container-title {
      padding: 1rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      letter-spacing: 0.2rem;
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.gray2};
    }
    .markdown-subcontainer {
      background-color: #fff;
      height: 100vh;
    }
  }
  .border {
    height: 100vh;
    width: 0.1rem;
    background-color: ${(props) => props.theme.colors.gray4};
  }
  .preview-container {
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.gray5};
    .preview-title-container {
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding: 1rem;
      .preview-container-title {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        letter-spacing: 0.2rem;
        font-size: 1.4rem;
        color: ${(props) => props.theme.colors.gray2};
      }
      img {
        width: 1.6rem;
        height: 1.12rem;
        color: ${(props) => props.theme.colors.gray2};
      }
    }
    .preview-subcontainer {
      background-color: #fff;
      height: 100vh;
    }
  }
`;
