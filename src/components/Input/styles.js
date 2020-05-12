import styled from "styled-components";

export const StyledInput = styled.input`
  background: #fff;
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #000;
  margin: 0 0 10px;

  &::placeholder {
    color: #000;
  }
  &:focus {
    border: 1px solid #3b9eff;
  }
`;
