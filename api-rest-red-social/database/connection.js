const mongoose = require("mongoose");

const connection = async() => {

  try {

    await mongoose.connect("mongodb://localhost:27017/red_social");

    console.log("Conectado correctamente a la base de datos red_social");

  } catch(error) {
    console.log(error);
    throw new Error("Problemas al conectarse a la db");

  }
}

module.exports = connection;