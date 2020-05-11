import styled from "styled-components";

export const Container = styled.div`
  .loading {
    height: 380px;
    width: 100%;

    background: #3bb9e3;

    .spinner {
      margin: 0 auto;
      padding-top: 15%;
    }
  }
  img {
    z-index: 50;
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
