const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

route.get("/", services.homeRoutes);

route.get("/add-books", services.add_books);

route.get("/update-books", services.update_books);

//API
/*route.post("/api/books", controller.create);

route.get("/api/books", controller.find);

route.put("/api/books/:id", function (req, res) {
  controller.update;
});
route.delete("/api/books/:id", controller.delete);*/

//export routes
module.exports = route;
