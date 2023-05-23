export const getError = (code) => {
  const codeMatcher = {
    HTTP_UNAUTHORIZED: 'Credenciales Inválidas',
    ERR_BAD_REQUEST: 'Error al hacer la petición'
  }

  return codeMatcher[code]
}
