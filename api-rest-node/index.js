const { connection } = require("./database/connection");
const express = require("express");
const cors = require("cors");

// Conectar a la db
connection();

// Crear servidor de Node
const app = express();
const puerto = 3900;

// Configurar cors (es nuestro middleware)
app.use(cors())

// Convertir body a objeto js
app.use(express.json());

// Crear rutas
app.get("/probando", (req, res) => {

  return res.status(200).json(
    {
      curso: "Master en React",
      autor: "Victor"
    }
  );
});

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Hola Mundo</h1>");
});

// Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto:" + puerto);
});