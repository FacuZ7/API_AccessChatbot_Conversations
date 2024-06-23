import { VectorSchema } from "../models/schemaIndex.js";
import handleHTTPError from "../utils/handleError.js";

const createVector = async (req, res) => {
    const vectorId = req.body.vector_id;
    const fileName = req.body.filename;
  
    const vector = new VectorSchema({
      vector_id: vectorId,
      filename: fileName,
      realted_vector_id: [],
    });
  
    try {
      const newVector = await vector.save();
      res.json(newVector);
    } catch (error) {
      handleHTTPError(res, "CREATE_ITEM_ERROR"); //por default devuelve codigo 403
    }
};

export { createVector };