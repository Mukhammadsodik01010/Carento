const express = require("express");
const {
  AddClient,
  GettingAllClients,
  SignIn,
} = require("../Controller/Client.controller");

const ClientRouter = express.Router();

ClientRouter.post("/add-client", AddClient);
ClientRouter.get("/all-clients", GettingAllClients);
ClientRouter.post("/compare-client", SignIn);

module.exports = ClientRouter;
