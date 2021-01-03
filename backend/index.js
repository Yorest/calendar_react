const express = require("express");
var cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./database/config");

//crear servidor de express
const app = express();

//base de datos
dbConnection();

// cors
app.use(cors());

//lectura y parseo de body
app.use(express.json());

//directorio publico
app.use(express.static("public"));

// rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`hola mundo en el puerto ${process.env.PORT}`);
});
