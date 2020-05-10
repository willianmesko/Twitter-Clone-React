import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  div {
    z-index: 3;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 5px solid #fff;
      margin-top: -130px;
    }
    input {
      display: none;
    }
  }
`;
