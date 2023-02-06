import { useState } from 'react'
export const useMayus = (text) => {

  const [myText, setMyText] = useState(text);

  const mayusculas = (valor = "") => {
    setMyText(text.toUpperCase());
  }

  const minusculas = () => {
    setMyText(text.toLowerCase());
  }
  const concatenar = (valor = "") => {
    setMyText(text + valor);
  }

  return {
    estado: myText,
    mayusculas,
    minusculas,
    concatenar
  };

}