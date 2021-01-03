const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "urlmongo",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
  } catch (error) {
    throw new Error("Error al conectar con la DB");
  }
};

module.exports = { dbConnection };
