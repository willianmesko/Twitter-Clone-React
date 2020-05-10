import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

  button {
    height: 34px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    font-weight: bold;
    font-size: 14px;
    color: #3bb9e3;
    border: 1px solid #3bb9e3;
    border-radius: 16px;
    margin-right: 20px;
  }
`;

export const Content = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 285px;
  height: 100%;

  ul {
    list-style: none;
    display: flex;
    height: 100%;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 15px;
      position: relative;

      span {
        color: #667580;
        font-size: 12px;
        font-weight: bold;
      }

      strong {
        font-size: 18px;
        color: #667580;
        margin-top: 2px;
      }
    }
    li.active strong {
      color: #3bb9e3;
    }
    li.active::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: #3bb9e3;
    }
  }
`;

export const NewTweet = styled.div`
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 80px;
  margin: 10px 0 0 0;

  button {
    height: 34px;
    background: white;
    display: flex;
    float: right;
    justify-content: center;
    width: 90px;

    font-weight: bold;
    font-size: 14px;
    color: #3bb9e3;
    border: 1px solid #3bb9e3;
    border-radius: 16px;
    margin-right: 20px;
  }

  textarea {
    outline: 0;
    height: 100px;
    width: 530px;
    border-radius: 5px;
  }
`;
