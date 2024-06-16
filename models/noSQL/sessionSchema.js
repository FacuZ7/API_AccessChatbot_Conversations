import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        unique: true,
        required: true,
      },
    chatId: {
        type: String,
        required: true,
      },
    fecha: {
        type: Date,
        default: Date.now,
        required: true,
      },
}, {
      timestamps: true, // This adds `createdAt` and `updatedAt` fields
}
);

const Session = mongoose.model("Session", sessionSchema);

export default Session;