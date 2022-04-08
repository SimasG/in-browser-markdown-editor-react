import styled from "styled-components";

export const StyledMain = styled.main`
  .main-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.5s;
    background-color: ${(props) => props.theme.colors.gray4};
    .markdown-container {
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.colors.gray5};
      .markdown-title-container {
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 1rem;
        .markdown-container-title {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          letter-spacing: 0.2rem;
          font-size: 1.4rem;
          color: ${(props) => props.theme.colors.gray2};
        }
        div {
          img {
            width: 1.586rem;
            height: 1.426rem;
            color: ${(props) => props.theme.colors.gray2};
          }
        }
      }
      .markdown-subcontainer {
        background-color: #fff;
        height: 100vh;
        padding: 2rem 1rem;
      }
    }
    .border {
      height: 100%;
      width: 0.3rem;
      background-color: ${(props) => props.theme.colors.gray4};
      display: none;
    }
    .preview-container {
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.colors.gray5};
      display: none;
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
        div {
          img {
            width: 1.6rem;
            height: 1.12rem;
            color: ${(props) => props.theme.colors.gray2};
          }
        }
      }
      .preview-subcontainer {
        background-color: #fff;
        height: 100vh;
        padding: 2rem 1rem;
      }
    }
  }

  /* Mobile view */
  /* @media (min-width: ${(props) => props.theme.width.tablet}) { */
  @media (min-width: 768px) {
    .main-container {
      flex-direction: row;
      .border {
        display: block;
      }
      .preview-container {
        display: block;
      }
    }
  }
`;
