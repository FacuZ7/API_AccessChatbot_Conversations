import { SessionModel } from "../models/schemaIndex";
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
    try {
        const { body } = req;
        const data = await SessionModel.create(body);
        res.send({ data });
    } catch (error) {
        handleHTTPError(res, "CREATE_SESSION_ERROR");
    }
}

const updateSession = async (req, res) => {
    //PATCH /session/:id
    try {
        const { id } = req.params;
        const { body } = req;
        const data = await SessionModel.findByIdAndUpdate(id, body, { new: true }, function(err, doc) {
            if(err){
                handleHTTPError(res, "UPDATE_ITEM_ERROR", 304);        
            }
            // else{    res.send({doc})    }
        });
        res.send({data});
    } catch (error) {
        handleHTTPError(res, "UPDATE_ITEM_ERROR");
    }
}

export { getSessionById, createSession, updateSession };