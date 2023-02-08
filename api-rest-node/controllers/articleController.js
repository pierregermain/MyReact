const article = (req,res) => {
  return res.status(200).json({
    mensaje: "Hello World"
  });
}

const curso = (req,res) => {
  return res.status(200).json(
    {
      curso: "Master en React",
      autor: "Victor"
    }
  );
}


module.exports = {
  article,
  curso
}