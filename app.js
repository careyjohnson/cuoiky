const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Declare all routers
const index = require("./routes/index");
// const detail = require("./routes/detail");
const {
  showProduct,
  editProduct,
  editProductSubmit,
} = require("./routes/detail");
const { showProduct1, addProduct } = require("./routes/product1");
app.get("/detail/:id", showProduct);
app.get("/detail/edit/:id", editProduct);
app.post("/detail/edit/:id", editProductSubmit);
app.get("/product1", showProduct1);
app.get("/product1/add", addProduct);
// template engine
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.use("/", index);
// app.get("/detail", detail);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mai@12012000",
  database: "myweb",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
global.db = db;

app.listen(5000);
