import styled from "styled-components";

export const Container = styled.aside`
  width: 290px;
  margin-top: 10px;

  .widget {
    background: #fff;
    padding: 15px;

    .title {
      display: flex;
      align-items: baseline;

      a {
        font-size: 12px;
        color: #3bb9e3;
        text-decoration: none;
        position: relative;
        padding-left: 10px;
      }
      a::before {
        content: "";
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: #222;
        position: absolute;
        left: 4px;
        top: 6px;
      }

      strong {
        font-size: 18px;
        color: #1f2226;
      }
    }
  }

  .follow {
    ul {
      list-style: none;
      margin-top: 10px;
      li > a {
        color: #ccd6dd;
        text-decoration: none;
        font-size: 14px;
      }
      li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccd6dd;
        padding-bottom: 10px;
        margin-bottom: 10px;

        .profile {
          display: flex;
          align-items: center;
          .info {
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            strong {
              font-size: 14px;
              color: #1f2326;
              span {
                font-weight: normal;
                color: #9a9a9a;
              }
            }
            button {
              height: 27px;
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
              margin-top: 4px;
            }
          }

          img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
          }
        }
      }

      li:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border: 0;
      }
    }
  }
`;
