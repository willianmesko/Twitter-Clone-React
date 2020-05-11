export default function getValidationError(errors) {
  const validationErros = [];
  errors.inner.forEach((error) => {
    validationErros[error.path] = error.message;
  });
  return validationErros;
}
