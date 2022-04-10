import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black3};
  padding: 0 1rem 0 0;
  position: relative;
  transition: 0.5s;
  .burger-menu {
    padding: 1.7rem;
    background-color: ${(props) => props.theme.colors.black4};
  }
  .current-file {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    .current-file-name {
      color: #fff;
    }
  }
  .delete {
    cursor: pointer;
  }
  .save-file-icon {
    padding: 1.1rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.brightOrange};
  }
`;
