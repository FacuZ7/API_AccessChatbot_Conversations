import handleHTTPError from "../utils/handleError";
import { ClientModel } from "../models/schemaIndex";

const getAllItems = async (req, res) => {
  try {
    const data = await ClientModel.find({});
    res.send({ data });
  } catch (error) {
    handleHTTPError(res, "GET_ALL_ITEMS_ERROR");
  }
};

const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ClientModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHTTPError(res, "GET_ITEM_BY_ID_ERROR");
  }
};

const createItem = async (req, res) => {
  try {
    const { body } = req;
    const data = await ClientModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHTTPError(res, "CREATE_ITEM_ERROR");
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await ClientModel;
  } catch (error) {
    handleHTTPError(res, "UPDATE_ITEM_ERROR");
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await ClientModel.findByIdAndDelete(id);
    res.send({ message: "Item deleted successfully" });
  } catch (error) {
    handleHTTPError(res, "DELETE_ITEM_ERROR");
  }
};

export { getAllItems, getItemById, createItem, updateItem, deleteItem };
