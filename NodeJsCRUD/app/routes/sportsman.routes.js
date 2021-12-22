module.exports = (app) => {
  const sportsmans = require("../controllers/record.controller.js");

  var router = require("express").Router();

  router.post("/", sportsmans.create);

  router.get("/", sportsmans.findAll);

  router.get("/:id", sportsmans.findOne);

  router.put("/:id", sportsmans.update);

  router.delete("/:id", sportsmans.delete);

  router.delete("/", sportsmans.deleteAll);

  app.use("/api/sportsmens", router);
};
