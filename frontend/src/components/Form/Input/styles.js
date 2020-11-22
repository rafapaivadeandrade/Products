import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #ebf2f5;
  border-radius: 10px;
  border: 2px solid #232129;
  width: 100%;
  padding: 16px;
  color: #f4ede8;
  display: flex;
  flex-direction: column;
  color: #666360;
  ${(props) =>
    props.isErroed &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      /* color: #ff9000; */
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

 input {
    flex: 1;
    background: transparent;
    border: 0;
    /* color: #f4ede8; */
    outline: none;
    &::placeholder {
      color: #666360;
    }
  }
`;

export const Error = styled.span`
  color: #c53030;
  height: 30px;
  span {
    background: #c53030;
    /* color: #ff9000; */

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
