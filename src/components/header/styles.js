import styled from "styled-components";

export const Container = styled.header`
  height: 46px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;
  nav ul {
    display: flex;
    list-style: none;
  }
  nav ul li:first-child {
    margin: 0;
  }

  nav ul li {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #667580;
    margin-left: 30px;
    font-weight: bold;
  }

  nav ul li img {
    margin-right: 7px;
  }
`;

export const Side = styled.div`
  display: flex;

  button {
    height: 34px;
    outline: 0px;
    background: #3bb9e3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    border: 0;
    border-radius: 16px;
  }
  input {
    width: 220px;
    outline: 0px;
    background: #f5f8fa;
    border: 1px solid #e6ecf0;
    height: 34px;
    padding: 0 30px 0 12px;
    border-radius: 16px;
    color: #667581;
    font-size: 12px;
    background: url("/images/search.svg") no-repeat 190px center;
  }
  img {
    height: 34px;
    width: 34px;
    border-radius: 50%;
  }
`;
