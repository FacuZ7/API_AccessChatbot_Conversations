import { ConversationsModel } from "../models/index.js"
import handleHTTPError from "../utils/handleError.js";

const getAllItems = async (req,res) => { //GET
    try {
        const data = await ConversationsModel.find({});
        res.send({data})
    } catch (error) {
        handleHTTPError(res,"GET_ALL_ITEMS_ERROR") //por default devuelve codigo 403
    }
  
}

const getItemById = async (req,res) => { //GET:id
   
}

const createItem = async (req,res) => { //POST
    try {
        const {body} = req
        const data = await ConversationsModel.create(body)
        res.send({data})
    } catch (error) {
        handleHTTPError(res,"CREATE_ITEM_ERROR") //por default devuelve codigo 403
    }
    
}

const updateItem = async (req,res) => { //PUT: Id
   
}

const deleteItem = async (req,res) => { //DELETE: Id
   
}



export {getAllItems, getItemById, createItem, updateItem, deleteItem}