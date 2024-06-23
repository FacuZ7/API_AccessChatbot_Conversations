import mongoose from "mongoose";

const VectorSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  related_vector_id: [],
});

export default mongoose.model("Vector", VectorSchema);