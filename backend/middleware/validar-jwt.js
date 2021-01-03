const jwt = require("jsonwebtoken");

const validarJWT = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No existe Token",
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT);

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "token invalido",
    });
  }

  next();
};

module.exports = { validarJWT };
