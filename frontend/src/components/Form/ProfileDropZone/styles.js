import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  ${(props) =>
    props.preview &&
    css`
      border: 0;
      background-size: cover;
      height: 160px;
      width: 100%;
      background-position: center;
      background-image: url("http://localhost:3000/files/${props.preview}");
    `}
  ${(props) =>
    !props.preview &&
    css`
      border: 1px dashed #ddd;
      cursor: pointer;
      height: 160px;
      display: flex;
      justify-content: center;
    `}
`;

export const Image = styled.img`
  cursor: pointer;
  height: 160px;
  display: flex;
  justify-content: center;
  width: 100%;
  outline: none;
`;
Image.defaultProps = {
  //   src: camera,
  //   position: "absolute",
};

export const Input = styled.input`
  position: absolute;
  border: 1px dashed #ddd;
  cursor: pointer;
  height: 160px;
  width: 100%;
  outline: none;
  opacity: 0;
`;
export const Error = styled.span`
  color: #c53030;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;
