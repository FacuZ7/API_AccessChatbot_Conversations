import { VectorModel } from "../models/schemaIndex.js";
import handleHTTPError from "../utils/handleError.js";

const getVector = async (req, res) => {
    try {
      const { filename } = req.query;
      const data = await VectorModel.find({ filename });
      res.send({data});
    } catch (error) {
      handleHTTPError(res, error);
    }
}; 


const createVector = async (req, res) => {
    console.log(req.body)

    const fileName = req.body.filename;
    const arrayVectorsId = req.body.related_vector_id;

    const vector = new VectorModel({
      filename: fileName,
      related_vector_id: arrayVectorsId,
    });
  
    try {
      const newVector = await vector.save();
      res.json(newVector);
    } catch (error) {
      handleHTTPError(res, error);
    }
};

export { getVector, createVector };