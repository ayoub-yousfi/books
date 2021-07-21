// creation du serveur
const express = require("express");

//creation des parametres d'environnements
const dataenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

//creation de la bade de donnes
const connectDB = require("./server/database/connection");

const app = express();

dataenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

//data base connections
connectDB();

//parse request to body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use(
  "/css",
  express.static(path.resolve(__dirname, "assets/css/style.css"))
);
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// load routes
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`sever is running on http://localhost:${PORT}`);
});

//C:\Users\HP\Desktop\ayoub ing\nodejs\crud_app\server.js
//C:\Users\HP\Desktop\ayoub ing\nodejs\project\index.js
//C:\Users\HP\Desktop\ayoub ing\nodejs\project\bin\www

//hello ayoub
