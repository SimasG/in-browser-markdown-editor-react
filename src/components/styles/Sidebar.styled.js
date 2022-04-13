import styled from "styled-components";

export const StyledSidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.black2};
  width: 25rem;
  height: 100vh;
  overflow-x: hidden;
  padding: 2rem 1.5rem;
  left: -25rem;
  transition: 0.5s;
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    margin-bottom: 3rem;
  }
  .document-section {
    .my-documents-title {
      font-family: "Roboto", sans-serif;
      font-weight: medium;
      letter-spacing: 2px;
      font-weight: 1.4rem;
      color: ${(props) => props.theme.colors.gray2};
      margin-bottom: 3rem;
    }
    button {
      font-family: "Roboto", sans-serif;
      font-size: 1.5rem;
      width: 100%;
      padding: 1rem;
      color: #fff;
      border-radius: 4px;
      background-color: ${(props) => props.theme.colors.brightOrange};
      margin-bottom: 2rem;
    }
    .current-document-container {
      .current-document {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 2rem;
        border-radius: 4px;
        cursor: pointer;
        :hover {
          background-color: ${(props) => props.theme.colors.black3};
        }
        .current-document-subsection {
          .date {
            font-family: "Roboto", sans-serif;
            font-size: 1.3rem;
            font-weight: 300;
            color: ${(props) => props.theme.colors.gray2};
          }
          .document-name-input {
            outline: none;
            border: none;
            background: transparent;
            color: #fff;
            font-size: 1.5rem;
            font-family: "Roboto", sans-serif;
            padding: 0.5rem 0;
          }
          .update-btn {
            width: 10rem;
          }
        }
      }
    }
  }
`;
