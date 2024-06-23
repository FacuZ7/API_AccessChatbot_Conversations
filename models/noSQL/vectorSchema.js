import mongoose from "mongoose";

const VectorSchema = new mongoose.Schema({
  vector_id: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  realted_vector_id: [],
});

export default mongoose.model("Vector", VectorSchema);