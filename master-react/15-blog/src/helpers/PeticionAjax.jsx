export const PeticionAjax = async (url, method, dataSave = "", archivos = false) => {

  let cargando = true;

  let opciones = {
    method: "GET"
  }

  if (method == "GET") {
    opciones = {
      method: "GET"
    }
  }
  if (method == "DELETE") {
    opciones = {
      method: "DELETE"
    }
  }

  if (method == "POST" || method == "PUT") {

    if (archivos) {
      opciones = {
        method: method,
        body : dataSave
      }
    } else {
      opciones = {
        method: method,
        body: JSON.stringify(dataSave),
        headers: {
          "Content-Type": "application/json"
        }
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
