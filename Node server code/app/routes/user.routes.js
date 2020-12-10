module.exports = (app) => {
  const users = require("../controllers/users.controller.js");
  var router = require("express").Router();

 
  router.get("/:email",users.getUserByEmail);
  router.put("/:email/:data",users.updatePassword)

  app.use("/api/users", router);
};
