const test = (req,res) => {
  return res.status(200).json({
    mensaje: "Hello World"
  });
}

module.exports = {
  test
}