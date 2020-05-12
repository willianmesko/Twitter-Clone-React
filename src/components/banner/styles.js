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

    height: 380px;
    width: 100%;
    background: #3bb9e3;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

  .changeCover {
    z-index: 10;
    cursor: pointer;
    right: 50px;
    position: absolute;
    color: #000;
    padding: 2px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 2px;
    height: 22px;
    background-color: #fff;
    opacity: 0.6;

    &:hover {
      opacity: 0.4;
    }
  }
  input {
    display: none;
  }
`;
