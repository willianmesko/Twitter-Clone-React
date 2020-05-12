import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 20vh;
    #bio {
      height: 88px;
    }
    input {
    }
    span {
      color: #f64c75;
      align-self: center;
      margin: 0 0 10px;
      font-weight: bold;
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
    button {
      outline: 0;
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: #3b9eef;
      }
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
