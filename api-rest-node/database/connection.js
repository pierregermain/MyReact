const mongoose = require("mongoose");

const connection = async() => {
  try {

    await mongoose.connect("mongodb://localhost:27017/mi_blog");

    console.log("Hemos podido conectarnos a la db");

  } catch(error) {
    console.log(error);
    throw new Error("Problemas al conectarse a la db");

  }
}

module.exports = {
  connection
}