import styled from "styled-components";

export const PageLanding = styled.div`
  @media screen and (min-width: 480px) {
    width: 100vw;
    margin: 80px auto;
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
    margin: auto auto;
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContentWrapper = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 20px;
  border-radius: 50px;
  padding: 30px;

  p {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 10px;
    color: black;
  }
`;
