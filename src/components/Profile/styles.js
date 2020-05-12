import styled from "styled-components";

export const Content = styled.aside`
  width: 260px;
  img.avatar {
  }
  .edit-user {
    display: flex;
    width: 100px;
    background-color: blue;

    p {
      display: none;
    }

    &:hover {
      p {
        display: flex;
      }
    }
    h1 {
      font-size: 21px;
      color: #000;

      margin-top: 0px;
    }
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

  .list li {
    font-size: 14px;
    padding-top: 3px;
    color: #657786;
    display: flex;
    align-items: center;
    margin-top: 5px;

    a {
      text-decoration: none;
      color: #657786;
    }

    img {
      margin-right: 10px;
    }
  }
  ul.list li {
    margin: 0;
  }

  .followers {
    margin-top: 4px;
    strong {
      color: #657786;
    }
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      align-items: flex-start;

      img {
        cursor: pointer;
        height: 45px;
        width: 45px;
        background: #d0d5d9;
        border-radius: 50%;
        flex: 1 0 auto;
        margin: 0 5px 10px 0;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  .images {
    margin-top: 4px;
    strong {
      color: #657786;
    }
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      align-items: flex-start;

      img {
        cursor: pointer;
        height: 80px;
        width: 80px;
        background: #d0d5d9;
        border-radius: 8px;
        flex-shrink: 0;
        margin: 0 5px 5px 0;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
