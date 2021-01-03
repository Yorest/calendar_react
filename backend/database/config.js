const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yorestmongodb:9E3NPwbvT7Tb6XFq@cluster0.lm1gm.mongodb.net/calendar",
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
