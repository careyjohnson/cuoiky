// const express = require("express");
// const router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("detail");
// });

// module.exports = function (req, res) {
//   let query = "SELECT * FROM `products`";
//   db.query(query, (err, result) => {
//     res.render("detail", {
//       title: "Nguyen Thanh Mai",
//       name: result[0].product_name,
//       product: result[0],
//     });
//   });
// };

module.exports = {
  showProduct: function (req, res) {
    let query =
      "SELECT * FROM `products` where product_id='" + req.params.id + "'";
    db.query(query, (err, result) => {
      res.render("detail", {
        title: "Nguyen Thanh Mai",
        name: result[0].product_name,
        product: result[0],
      });
    });
  },
  editProduct: function (req, res) {
    let query =
      "SELECT * FROM `products` WHERE product_id ='" + req.params.id + "'";
    db.query(query, (err, result) => {
      res.render("edit", {
        title: "Nguyen Thanh Mai",
        name: "Edit",
        product: result[0],
      });
    });
  },
  editProductSubmit: function (req, res) {
    let query =
      "UPDATE `products` set product_name ='" +
      req.body.product_name +
      "'" +
      ",description ='" +
      req.body.description +
      "'" +
      ",list_price ='" +
      req.body.list_price +
      "'" +
      " WHERE product_id ='" +
      req.params.id +
      "'";
    db.query(query, (err, result) => {
      res.redirect("/detail/" + req.params.id);
    });
  },
};
