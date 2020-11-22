import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 480px) {
    margin: 80px auto;
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    margin: auto auto;
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Content = styled.div`
  @media screen and (min-width: 480px) {
    width: 100%;
    background: #fff;
    margin-top: 50px;
    border-radius: 50px;
    padding: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    background: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 50px;
    padding: 30px;
  }
`;
export const Header = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      margin-bottom: 24px;
      color: #41414d;
    }
    a {
      svg {
        margin-left: -80px;
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      text-align: center;
      margin-bottom: 24px;
      color: #41414d;
    }
    a {
      svg {
        margin-left: -120px;
        margin-bottom: 10px;
      }
    }
  }
`;
