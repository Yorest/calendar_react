/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const validarCampos = require("../middleware/validar-campos");
const { validarJWT } = require("../middleware/validar-jwt");

const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");

router.post(
  "/new",
  [
    // middlewares
    check("name", "nombre es obligatorio").not().isEmpty(),
    check("email", "email es obligatorio").isEmail(),
    check("password", "passsword debe ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  crearUsuario
);

router.post(
  "/",
  [
    check("email", "email es obligatorio").isEmail(),
    check("password", "passsword debe ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
);

router.get("/renew", validarJWT, revalidarToken);

module.exports = router;
