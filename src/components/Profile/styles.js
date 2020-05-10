import styled from "styled-components";

export const Content = styled.aside`
  width: 260px;
  img.avatar {
  }

  h1 {
    font-size: 21px;
    color: #1f2226;
    margin-top: 10px;
  }

  span {
    font-size: 14px;
    color: #1f2226;
  }

  p {
    font-size: 14px;
    color: #1f2226;
    margin-top: 15px;
  }

  ul {
    margin-top: 20px;
    list-style: none;
  }

  ul.list li {
    font-size: 14px;
    color: #657786;
    display: flex;
    align-items: center;
    margin-top: 5px;

    img {
      margin-right: 10px;
    }
  }
  ul.list li {
    margin: 0;
  }

  .followers {
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      align-items: flex-start;

      li {
        height: 45px;
        width: 45px;
        background: #d0d5d9;
        border-radius: 50%;
        flex: 1 0 auto;
        margin: 0 5px 10px 0;
      }
    }
  }
`;
