import mongoose from "mongoose";

const ConversationsSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
      unique: true,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    botId: {
      type: String,
      required: true,
    },
    botName: {
      type: String,
    },
    duration: {
      start: {
        type: Date,
        required: true,
      },
      end: {
        type: Date,
        required: true,
      },
    },
    status: {
      type: String,
      enum: ["active", "completed", "abandoned"],
    },
    messages: [
      {
        text: String,
        timestamp: Date,
        botResponse: String,
      },
    ],
    lastActivity: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  }
);

export default mongoose.model("Conversation", ConversationsSchema);
