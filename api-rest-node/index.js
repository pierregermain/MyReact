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
app.use(express.json()); // Para recibir datos con content-type app/json
app.use(express.urlencoded({extended:true})) // Para recibir datos con formato normal form-urlencoded

// Importar Rutas
const articleRoute = require("./routes/articleRoute");

// Carga de Rutas
app.use("/api",articleRoute);

// Rutas Hardcodeadas
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Hola Mundo</h1>");
});

// Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto:" + puerto);
});