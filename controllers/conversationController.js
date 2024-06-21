import { ConversationsModel } from "../models/schemaIndex.js";
import { saveConversation } from "../utils/saveConversations.js";
import handleHTTPError from "../utils/handleError.js";

const getConversations = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 100;
  const offset = (page - 1) * limit;

  try {
    const conversations = await Conversation.find().skip(offset).limit(limit);

    res.json(conversations);
  } catch (error) {
    handleHTTPError(res, "GET_ALL_ITEMS_ERROR"); //por default devuelve codigo 403
  }
};

const getConversationBySessionId = async (req, res) => {
  const sessionId = req.params.id;

  try {
    const conversation = await Conversation.findOne({ session_id: sessionId });
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

  const conversation = new Conversation({
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

const updateItem = async (req, res) => {
  //PUT: Id
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await ConversationsModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.send({ data });
  } catch (error) {
    handleHTTPError(res, "UPDATE_ITEM_ERROR"); //por default devuelve codigo 403
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

const handleEndOfConversation = async (req, res) => {
  const { user, messages } = req.body;

  // Save the conversation
  await saveConversation(user, messages);

  // Send a response
  res.json({ message: "Conversation saved successfully" });
};

const addMessage = async (user, message) => {
  const conversation = await ConversationsModel.findOne({ user });
  conversation.messages.push(message);
  conversation.lastActivity = Date.now();
  await conversation.save();
};

const saveInactiveConversations = async () => {
  const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
  const conversations = await ConversationsModel.find({
    lastActivity: { $lt: thirtyMinutesAgo },
  });

  for (const conversation of conversations) {
    await saveConversation(conversation.user, conversation.messages);
  }
};

export {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  handleEndOfConversation,
  saveInactiveConversations,
};
