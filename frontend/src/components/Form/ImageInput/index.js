import React, { useRef, useEffect, useCallback, useState } from "react";
import camera from "../../../assets/images/camera.svg";
import { Error, Container, Input, Image } from "./styles";

import { useField } from "@unform/core";

const ImageInput = ({ name, product, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);
  const handlePreview = useCallback((e) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPreview(null);
    } else {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
    }
  }, []);

  useEffect(() => {
    if (product) {
      setPreview(product);
    }
  }, [product]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "files[0]",
      clearValue(ref) {
        ref.value = "";
        setPreview(null);
      },
      setValue(value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container preview={preview}>
        <Input
          type="file"
          ref={inputRef}
          onChange={handlePreview}
          {...rest}
          image={camera}
        />
        <Image preview={preview} camera={camera} />
      </Container>

      {error && <Error>{error}</Error>}
    </>
  );
};

export default ImageInput;
