import { ConversationsModel } from "../models/schemaIndex.js";
import handleHTTPError from "../utils/handleError.js";
import AiMessage from "../models/noSQL/aiMessageSchema.js";
import HumanMessage from "../models/noSQL/humanMessageSchema.js";

const getConversations = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 100;
  const offset = (page - 1) * limit;

  try {
    const conversations = await ConversationsModel.find()
      .skip(offset)
      .limit(limit);

    res.json(conversations);
  } catch (error) {
    handleHTTPError(res, "GET_ALL_ITEMS_ERROR"); //por default devuelve codigo 403
  }
};

const getConversationBySessionId = async (req, res) => {
  const sessionId = req.params.id;

  try {
    const conversation = await ConversationsModel.findOne({
      session_id: sessionId,
    });
    res.json(conversation);
    res.send({ data });
  } catch (error) {
    handleHTTPError(res, "GET_ITEM_BY_ID_ERROR"); //por default devuelve codigo 403
  }
};

const createConversation = async (req, res) => {
  const chatId = req.body.chat_id;
  const userId = req.body.user_id;
  const sessionId = req.body.session_id;

  const conversation = new ConversationsModel({
    chat_id: chatId,
    user_id: userId,
    session_id: sessionId,
    status: "open",
    messages: [],
  });

  try {
    const newConversation = await conversation.save();
    res.json(newConversation);
  } catch (error) {
    handleHTTPError(res, "CREATE_ITEM_ERROR"); //por default devuelve codigo 403
  }
};

const deleteItem = async (req, res) => {
  //DELETE: Id
  try {
    const { id } = req.params;
    await ConversationsModel.findByIdAndDelete(id);
    res.send({ message: "Item deleted successfully" });
  } catch (error) {
    handleHTTPError(res, "DELETE_ITEM_ERROR"); //por default devuelve codigo 403
  }
};

const saveMessages = async (req, res) => {
  // Para buscar el chat
  const chatId = req.params.id;
  const sessionId = req.params.sessionId;

  // Para crear el nuevo tupo de mensaje
  const role = req.body.role;
  const messageId = req.body.message_id;
  const content = req.body.content;
  const date = req.body.date;

  let message;

  try {
    const conversation = await ConversationsModel.findOne({
      chat_id: chatId,
      session_id: sessionId,
    });

    if (conversation !== null) {
      if (role === "human") {
        message = new HumanMessage({
          role: role,
          message_id: messageId,
          content: content,
          date: date,
        });
      } else if (role === "ai") {
        message = new AiMessage({
          role: role,
          message_id: messageId,
          content: content,
          date: date,
          feedback: "None",
        });
      }

      conversation.messages.push(message);
      await conversation.save();
      res.json(conversation);
    }
  } catch (err) {
    handleHTTPError(res, "SAVE_MESSAGE_ERROR");
  }
};

const saveFeedback = async (req, res) => {
  // Para buscar el chat
  const chatId = req.params.id;
  const messageId = req.params.message_id;

  // Para obtener el feedback
  const feedback = req.body.feedback;

  try {
    const conversation = await ConversationsModel.findOne({
      chat_id: chatId,
      "messages.message_id": messageId,
    });

    if (conversation != null) {
      let message = conversation.messages.find(
        (message) => message.message_id === messageId
      );

      message.feedback = feedback;

      conversation.markModified("messages");

      const savedConversation = await conversation.save();
      res.json(savedConversation);
    }
  } catch (err) {
    handleHTTPError(res, "SAVE_FEEDBACK_ERROR");
  }
};

const getMessages = async (req, res) => {
  const DEFAULT = 8;

  // Para buscar el chat
  const chatId = req.params.id;
  const sessionId = req.params.sessionId;

  // Trae la cantidad de mensajes solicitadas en el query o sino los últimos 8
  const limit = parseInt(req.query.limit) || DEFAULT;

  try {
    const conversation = await ConversationsModel.findOne({
      chat_id: chatId,
      session_id: sessionId,
    });

    if (conversation != null) {
      if (conversation.messages && conversation.messages.length > 0) {
        const messages = conversation.messages;
        const index = Math.max(messages.length - limit, 0);
        const lastMessages = messages.slice(index);

        res.json(lastMessages);
      } else {
        res.json([]);
      }
    }
  } catch (err) {
    handleHTTPError(res, "GET_MESSAGES_ERROR");
  }
};

export {
  getConversations,
  getConversationBySessionId,
  createConversation,
  deleteItem,
  saveMessages,
  saveFeedback,
  getMessages,
};
