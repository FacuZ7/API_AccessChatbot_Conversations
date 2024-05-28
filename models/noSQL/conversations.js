import mongoose from "mongoose";

const ConversationsSchema = new mongoose.Schema(
  {
      conversationId: {
          type: String,
          unique: true,
          required: true
      },
      userId: {
          type: String,
          required: true
      },
      userName: {
          type: String
      },
      botId: {
          type: String,
          required: true
      },
      botName: {
          type: String
      },
      duration: {
          start: {
              type: Date,
              required: true
          },
          end: {
              type: Date,
              required: true
          }
      },
      createdAt: {
          type: Date,
          default: Date.now
      },
      updatedAt: {
          type: Date,
          default: Date.now
      },
      status: {
          type: String,
          enum: ['active', 'completed', 'abandoned'],
          default: 'active'
      },
      "q&a": [{
          identifier: {
              type: String,
              required: true
          },
          message: {
              type: String,
              required: true
          },
          timestamp: {
              type: Date,
              default: Date.now
          },
          sender: {
              type: String,
              enum: ['user', 'bot'],
              required: true
          },
          sentiment: {
              type: String,
              enum: ['positive', 'negative', 'neutral']
          }
      }],
      context: {
          type: String
      },
      tags: [{
          type: String
      }]
  }
);


//nombre de tabla en sql/ nombre de modelo en mongo (Conversation) 
export default mongoose.model('Conversations',ConversationsSchema)