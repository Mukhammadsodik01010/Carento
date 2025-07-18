const express = require('express');
const {
  AddNewUserAdmin,
  GettingAllAdmins,
  DeleteAdmin,
} = require("../Controller/AdminAuth.controller");

const AdminRouter = express.Router()



AdminRouter.post("/adding-new-admin", AddNewUserAdmin);
AdminRouter.get("/getting-all-admins", GettingAllAdmins);
AdminRouter.delete("/deleting-admins/:id", DeleteAdmin);




module.exports = AdminRouter;