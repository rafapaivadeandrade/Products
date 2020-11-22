import { ValidationError } from "yup";

export default function getValidationErrors(err) {
  const validationErros = {};

  err.inner.forEach((error) => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
}
