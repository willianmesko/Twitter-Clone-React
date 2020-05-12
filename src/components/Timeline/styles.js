import styled from "styled-components";

export const Container = styled.section`
  flex: 1;
  background: #fff;
  margin: 150px 20px 0;
  button {
    height: 27px;
    margin: 20px 20px 10px 190px;
    background: white;

    align-self: center;

    width: 110px;
    font-weight: bold;
    font-size: 14px;
    color: #3bb9e3;
    border: 1px solid #3bb9e3;
    border-radius: 16px;
    margin-top: 4px;
  }

  nav {
    border-bottom: 1px solid #e6ecf0;
    padding: 10px 15px;
    ul {
      display: flex;
    }
    li {
      cursor: pointer;
      list-style: none;
      text-decoration: none;
      color: #3bb9e3;
      font-size: 18px;
      font-weight: bold;
      margin-left: 20px;

      &:hover {
        opacity: 0.7;
      }
      & active {
        color: #1f2226;
      }
    }

    li:first-child {
      margin: 0;
    }
  }

  .medias {
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      li {
        height: 200px;
        width: 200px;

        background: #d0d5d9;
        border-radius: 8px;
        flex-shrink: 0;
        margin: 0 5px 5px 0;

        img {
          cursor: pointer;
          border-radius: 8px;
          height: 200px;
          width: 200px;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
`;

export const Tweets = styled.ul`
  list-style: none;
`;

export const Tweet = styled.li`
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 15px;
  display: flex;

  img {
    cursor: pointer;
    width: 48px;
    height: 48px;
    border-radius: 50%;

    &:hover {
      opacity: 0.7;
    }
  }

  .info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    .actions {
      display: flex;
      margin-top: 20px;
      p:first-child {
        margin-left: 0;
      }

      p {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #667580;
        font-weight: bold;
        font-size: 12px;
        margin-left: 30px;
        img {
          margin-right: 5px;

          width: 18px;
          height: 18px;
          border-radius: 50%;
        }
      }

      p {
        font-size: 14px;
        color: #1f2326;
        margin-top: 5px;
      }

      strong {
        font-size: 14px;
        color: #1f2326;

        span {
          font-size: 13px;
          color: #7b8b9a;
          font-weight: normal;
        }
      }
    }
  }
`;
