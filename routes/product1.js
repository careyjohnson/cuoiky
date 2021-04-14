module.exports = {
  showProduct1: function (req, res) {
    let query = "SELECT * FROM `products`";
    db.query(query, (err, result) => {
      res.render("product1", {
        title: "My Shop",
        // name: result[0].product_name,
        product: result,
      });
    });
  },
  addProduct: function (req, res) {
    let query =
      "INSERT INTO `products` VALUES(product_id='" +
      req.body.product_id +
      "'" +
      ",product_name ='" +
      req.body.product_name +
      "'" +
      ",list_price ='" +
      req.body.list_price +
      "'" +
      " img_url='" +
      req.body.img_url +
      "product_id='" +
      req.body.product_id +
      "' )";
    db.query(query, (err, result) => {
      res.render("add", {
        title: "Nguyen Thanh Mai",
        name: "Add Product",
      });
      res.render("/product1/" + req.params.id);
      res.redirect("/product1/" + req.params.id);
    });
  },
};
