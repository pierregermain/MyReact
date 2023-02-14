export const PeticionAjax = async (url, method, dataSave = "") => {

  let cargando = true;

  let opciones = {
    method: "GET"
  }

  if (method == "GET" || method == "DELETE") {
    opciones = {
      method: "GET"
    }
  }

  if (method == "POST" || method == "PUT") {
    opciones = {
      method: method,
      body: JSON.stringify(dataSave),
      headers: {
        "Content-Type": "application/json"
      }
    }
  }

  const peticion = await fetch(url, opciones);
  const data = await peticion.json();

  cargando = false;

  return {
    data,
    cargando,
  }
}
