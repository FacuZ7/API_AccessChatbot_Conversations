import { SessionModel } from "../models/schemaIndex.js";
import handleHTTPError from "../utils/handleError.js";
import getCurrentTime from "../utils/time.js";
import generateRandomID from '../utils/randomId.js'

const getAllSessions = async (req, res) => {
  try {
    const sessions = await SessionModel.find();
    res.json(sessions);
  } catch (err) {
    handleHTTPError(res, "GET_ALL_SESSIONS_ERROR", 404);
  }
};

const getSessionByChatId = async (req, res) => {
  //GET /session/:id
  
  try {
    const id = req.params.id
    const data = await SessionModel.findOne({ chat_id: id });
    res.send(data)
  } catch (error) {
    handleHTTPError(res, "GET_SESSION_BY_ID_ERROR", 404);
  }
};

const createSession = async (req, res) => {
  //POST /session
  try {
    const {chat_id} = req.body

    const session = new SessionModel({
      chat_id,
      last_active: getCurrentTime(),
      session_id: generateRandomID()
  })
    
    const data = await session.save()
    res.json(data)
  } catch (error) {
    handleHTTPError(res, "CREATE_SESSION_ERROR");
  }
};

const updateSession = async (req, res) => {
  //PATCH /session/:id
  const { id } = req.params;
  try {
    const session = await SessionModel.findOne({ chat_id: id })

      if(session !== null){
          session.session_id = generateRandomID()
          session.last_active = getCurrentTime()
      }
 
      const updatedSession = await session.save()
        
      res.json(updatedSession)
  } catch (error) {
    handleHTTPError(res, "UPDATE_ITEM_ERROR");
  }
};

const updateActivity = async (req, res) => {
  const chat_id = req.params.id;

  try {
    const session = await SessionModel.findOne({ chat_id });

    if (session !== null) {
      session.last_active = getCurrentTime();
    }

    const updatedSession = await session.save();

    res.json(updatedSession);
  } catch (err) {
    res.json({
      message: err.message,
    })
  }
}

const erraseAllSessions = async (req, res) => {}; //implementar
const erraseSession = async (req, res) => {}; //implementar

export {
  getAllSessions,
  getSessionByChatId,
  createSession,
  updateSession,
  updateActivity,
};
