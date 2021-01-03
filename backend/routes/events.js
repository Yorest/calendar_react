/* 
    Rutas de Events
    host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const { isDate } = require("../helpers/isDate");

const validarCampos = require("../middleware/validar-campos");
const { validarJWT } = require("../middleware/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

// todas las rutas tienen que pasar por la validacion JWT
router.use(validarJWT);

//Obtener eventos
router.get("/", getEventos);

// crear un nuevo evento
router.post(
  "/",
  [
    check("title", "titulo es obligatorio").not().isEmpty(),
    check("start", "fecha de inicio es obligatoria").custom(isDate),
    check("end", "fecha de fin es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

// Actualizar Evento
router.put(
  "/:id",
  [
    check("title", "titulo es obligatorio").not().isEmpty(),
    check("start", "fecha de inicio es obligatoria").custom(isDate),
    check("end", "fecha de fin es obligatoria").custom(isDate),
    validarCampos,
  ],
  actualizarEvento
);

//Borrar Evento
router.delete("/:id", eliminarEvento);

module.exports = router;
