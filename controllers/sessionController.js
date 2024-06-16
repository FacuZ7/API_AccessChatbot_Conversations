import { SessionModelModel } from "../models/schemaIndex";
import handleHTTPError from "../utils/handleError";

const getSessionById = async (req, res) => {
    //GET /session/:id
    try {
        const { id } = req.params;
        const data = await SessionModel.findById(id);
        res.send({ data });
    } catch (error) {
        handleHTTPError(res, "GET_SESSION_BY_ID_ERROR", 404);
    }
}

const createSession = async (req, res) => {
    //POST /session/:id
}

const updateSession = async (req, res) => {
    //PATCH /session/:id
}
