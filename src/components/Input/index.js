import React, { useEffect, useRef } from "react";
import { StyledInput } from "./styles";
import { useField } from "@unform/core";
export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <>
      <StyledInput defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error}
    </>
  );
}
