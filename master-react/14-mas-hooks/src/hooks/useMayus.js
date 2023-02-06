export const useMayus = (text) => {

  const mayusculas = (valor = "") => {
    return text.toUpperCase();
  }

  const minusculas = () => {
    return text.toLowerCase();
  }
  const concatenar = (valor = "") => {
    return text + valor;

  }

  return {
    mayusculas,
    minusculas,
    concatenar
  };

}