const axios = require("axios");

exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/books")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
/*exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:5000/api/users")
    .then((response) => {
      console.log(response.data.url);
      console.log(response.data.explanation);
    })
    .catch((error) => {
      console.log(error);
    });
};*/

exports.add_books = (req, res) => {
  res.render("add_books");
};

exports.update_books = (req, res) => {
  res.render("update_books");
};
