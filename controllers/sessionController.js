import { SessionModel } from "../models/schemaIndex.js";
import handleHTTPError from "../utils/handleError.js";

const getAllSessions = async (req, res) => {
  try {
    const sessions = await SessionModel.find();
    res.json(sessions);
  } catch (err) {
    handleHTTPError(res, "GET_ALL_SESSIONS_ERROR", 404);
  }
};

const getSessionById = async (req, res) => {
  //GET /session/:id
  const { id } = req.params;
  // console.log(id, req.params.id)

  try {
    const { id } = req.params;
    // const data = await SessionModel.findById(id);
    const data = await SessionModel.find({ chatId: id });
    res.send({ data });
  } catch (error) {
    handleHTTPError(res, "GET_SESSION_BY_ID_ERROR", 404);
  }
};

const createSession = async (req, res) => {
  //POST /session
  try {
    const { body } = req;
    const data = await SessionModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHTTPError(res, "CREATE_SESSION_ERROR");
  }
};

const updateSession = async (req, res) => {
  //PATCH /session/:id
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await SessionModel.findByIdAndUpdate(
      id,
      body,
      { new: true },
      function (err, doc) {
        if (err) {
          handleHTTPError(res, "UPDATE_ITEM_ERROR", 304);
        }
        // else{    res.send({doc})    }
      }
    );
    res.send({ data });
  } catch (error) {
    handleHTTPError(res, "UPDATE_ITEM_ERROR");
  }
};

const updateActivity = async (req, res) => {
  const chatId = req.params.id;

  try {
    const session = await Session.findOne({ chat_id: chatId });

    if (session !== null) {
      session.last_active = getCurrentTime();
    }

    const updatedSession = await session.save();

    res.json(updatedSession);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

const erraseAllSessions = async (req, res) => {}; //implementar
const erraseSession = async (req, res) => {}; //implementar

export {
  getAllSessions,
  getSessionById,
  createSession,
  updateSession,
  updateActivity,
};
