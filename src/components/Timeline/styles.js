import styled from "styled-components";

export const Container = styled.section`
  flex: 1;
  background: #fff;
  margin: 150px 20px 0;

  nav {
    border-bottom: 1px solid #e6ecf0;
    padding: 10px 15px;

    a {
      text-decoration: none;
      color: #3bb9e3;
      font-size: 18px;
      font-weight: bold;
      margin-left: 20px;

      & active {
        color: #1f2226;
      }
    }

    a:first-child {
      margin: 0;
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
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    .info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;

      .actions {
        display: flex;
        margin-top: 20px;
        a:first-child {
          margin-left: 0;
        }

        a {
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
