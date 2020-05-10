import styled from "styled-components";

export const Container = styled.div`
  z-index: 3;
  img {
    cursor: pointer;
    height: 380px;
    width: 100%;
    background: #3bb9e3;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    &:hover {
      opacity: 0.7;
    }
  }
  input {
    display: none;
  }
`;
