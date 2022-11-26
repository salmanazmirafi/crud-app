const express = require("express");
const {
  CreateProduct,
  ReadProduct,
  ReadProductId,
  UpdateProducts,
  DeleteProducts,
} = require("../controllers/ProductCon");

const Router = express.Router();

// create product
Router.post("/createproduct", CreateProduct);
// get product
Router.get("/readproduct", ReadProduct);
Router.get("/readproductid/:id", ReadProductId);
// update products
Router.put("/UpdateProduct/:id", UpdateProducts);
// Delete Products
Router.delete("/DeleteProduct/:id", DeleteProducts);

module.exports = Router;
