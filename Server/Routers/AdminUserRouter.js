const express = require('express');
const {
  AddNewUserAdmin,
  GettingAllAdmins,
  DeleteAdmin,
  SignInAdmin,
} = require("../Controller/AdminAuth.controller");

const AdminRouter = express.Router()



AdminRouter.post("/adding-new-admin", AddNewUserAdmin);
AdminRouter.get("/getting-all-admins", GettingAllAdmins);
AdminRouter.delete("/deleting-admins/:id", DeleteAdmin);
AdminRouter.post("/compare-admin", SignInAdmin);




module.exports = AdminRouter;