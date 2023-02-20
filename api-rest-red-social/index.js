// Importar dependendencias
const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

console.log("API NODE para RED SOCIAL arrancada!");

// Conexión a la db
connection();

// Crear servidor node
const app = express();
const puerto = 3900;

// Configurar cors
app.use(cors());

// Convertir los datos del body a objetos json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cargar conf rutas

// Ruta de prueba
app.get("/hello-world",(req,res) => {
  return res.status(200).json(
    {
      "message": "hello world"
    }
  );
})

// Poner servidor a escuchar petiones http
app.listen(puerto, () => {
  console.log('Servidor corriendo en el puerto ',puerto);
})