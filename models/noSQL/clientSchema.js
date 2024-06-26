import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  CUIT: {
    type: String,
    required: true,
    unique: true,
  },
  Empresa: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
