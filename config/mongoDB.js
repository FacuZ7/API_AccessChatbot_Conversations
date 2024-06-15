import mongoose from "mongoose";

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;

  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("****** CONECTADO A MONGO ******");

    mongoose.connection.on("disconnected", () => {
      console.log("****** MONGO DESCONECTADO ******");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("****** MONGO RECONECTADO ******");
    });
  } catch (err) {
    console.log("****** ERROR EN CONEXIÓN A MONGO ******" + err.message);
  }
};

export default dbConnect;
