import styled from "styled-components";

export const StyledNewFileModal = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: none;
  justify-content: center;
  align-items: center;
  .new-file-modal {
    width: 34.3rem;
    height: 18rem;
    border-radius: 4px;
    background-color: #fff;
    padding: 2rem;
    h4 {
      margin-bottom: 2rem;
    }
    input {
      background-color: #eeeeee;
      outline: none;
      border-radius: 4px;
      width: 100%;
      height: 3rem;
      padding: 1rem;
      margin-bottom: 2rem;
      font-size: 1.6rem;
    }
    button {
      background-color: ${(props) => props.theme.colors.brightOrange};
      padding: 1rem;
      border-radius: 4px;
      width: 100%;
      color: #fff;
      font-weight: 400;
    }
  }
`;
