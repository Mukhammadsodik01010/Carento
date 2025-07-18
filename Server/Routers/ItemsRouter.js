const express = require('express');
const {
  AddNewItem,
  GetItems,
  UpdateItem,
  GetItemById,
  DeleteItem,
} = require("../Controller/Item.Controller");

const ItemsRouter = express.Router()

ItemsRouter.post("/adding-item", AddNewItem);
ItemsRouter.get("/getting-all-items", GetItems);
ItemsRouter.get("/getting-one-item-by-id/:id", GetItemById);
ItemsRouter.put("/updating-item/:id", UpdateItem);
ItemsRouter.delete("/delete-item-by-id/:id", DeleteItem);

module.exports = ItemsRouter;