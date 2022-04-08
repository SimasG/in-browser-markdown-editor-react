import styled from "styled-components";

export const StyledSidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.black2};
  display: none;
  height: 100vh;
  overflow-x: hidden;
  padding: 2rem 1.5rem;
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
  }
  .document-section {
    h6 {
      font-family: "Roboto", sans-serif;
      font-weight: medium;
      letter-spacing: 2px;
      font-weight: 1.4rem;
      color: ${(props) => props.theme.colors.gray2};
    }
    button {
      font-family: "Roboto", sans-serif;
      font-size: 1.5rem;
      width: 100%;
      padding: 1rem;
      color: #fff;
      border-radius: 4px;
      background-color: ${(props) => props.theme.colors.brightOrange};
    }
    .current-document-container {
      .current-document {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1.5rem;
        .current-document-subsection {
          .date {
            font-family: "Roboto", sans-serif;
            font-size: 1.3rem;
            font-weight: 300;
            color: ${(props) => props.theme.colors.gray2};
          }
          .document-name {
            font-family: "Roboto", sans-serif;
            font-size: 1.5rem;
            font-weight: 400;
            color: #fff;
          }
        }
      }
    }
  }
`;