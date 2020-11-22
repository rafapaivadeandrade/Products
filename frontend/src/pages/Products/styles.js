import styled, { css } from "styled-components";

export const PageProducts = styled.div`
  @media screen and (min-width: 480px) {
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;
    h1 {
      text-align: center;
      margin-top: 80px;
      margin-bottom: 24px;
      color: #41414d;
    }
    div {
      text-align: center;
      color: black;
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;
      width: 50%;
      margin: 32px auto;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;
    h1 {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 24px;
      color: #41414d;
    }
    div {
      text-align: center;
      color: black;
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;
      width: 50%;
      margin: 32px auto;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
    li {
      background: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;
      @media screen and (max-width: 480px) {
        button:nth-of-type(1) {
          position: absolute;
          right: 10px;
          top: 24px;
          border: 0;
          background: transparent;
          &:hover {
            opacity: 0.8;
          }
        }
        button:nth-of-type(2) {
          position: absolute;
          right: 10px;
          top: 54px;
          border: 0;
          background: transparent;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      @media screen and (min-width: 480px) {
        button:nth-of-type(1) {
          position: absolute;
          right: 14px;
          top: 24px;
          border: 0;
          background: transparent;
          &:hover {
            opacity: 0.8;
          }
        }
        button:nth-of-type(2) {
          position: absolute;
          right: 44px;
          top: 24px;
          border: 0;
          background: transparent;
          &:hover {
            opacity: 0.8;
          }
        }
      }

      strong {
        display: block;
        margin-bottom: 10px;
        color: #41414d;
        margin-top: 20px;
      }
      strong:nth-child(1) {
        margin-top: 20px;
      }

      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }
      header {
        width: 90%;
        height: 120px;
        background-size: cover;
        background-position: center;
      }
    }
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  color: #41414d;

  @media screen and (max-width: 480px) {
    span {
      font-size: 20px;
      color: #41414d;
    }
    a {
      width: 20px;
      margin-left: auto;
      margin-top: 0;
      color: #41414d;
      text-decoration: none;
      &:hover {
        color: #ff9000;
      }
    }
    button {
      height: 20px;
      width: 20px;
      border-radius: 4px;
      border: 1px solid #dcdce6;
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.2s;
      &:hover {
        border-color: #999;
      }
    }
  }
  @media (min-width: 480px) {
    span {
      font-size: 20px;
      color: #41414d;
    }
    a {
      width: 260px;
      margin-left: auto;
      margin-top: 0;
      color: #41414d;
      text-decoration: none;
      &:hover {
        color: #ff9000;
      }
    }
    button {
      height: 60px;
      width: 60px;
      border-radius: 4px;
      border: 1px solid #dcdce6;
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.2s;
      &:hover {
        border-color: #999;
      }
    }
  }
`;
export const HeaderProduct = styled.header`
  ${(props) =>
    props.url &&
    css`
      background-image: url(${props.url});
    `}
`;
