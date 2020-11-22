import React, { useState, useRef, useEffect, useCallback } from "react";
import { Container, Error } from "./styles";
import { useField } from "@unform/core";

export default function Input({ name, product, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = product, error } = useField(
    name
  );
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({ name: fieldName, ref: inputRef.current, path: "value" });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <>
      <br />
      <Container isErroed={!!error} isFilled={isFilled} isFocused={isFocused}>
        <input
          defaultValue={defaultValue}
          onFocus={() => setIsFocused(true)}
          onBlur={handleInputBlur}
          ref={inputRef}
          {...rest}
        />
        {/* {error && <Error title={error}>{error}</Error>} */}
      </Container>
      <div>{error && <Error>{error}</Error>}</div>
    </>
  );
}
