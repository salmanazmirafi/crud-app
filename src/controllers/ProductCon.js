const ProductsModel = require("../models/ProductsModel");

// create products
exports.CreateProduct = (req, res) => {
  let reqBody = req.body;
  ProductsModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(201).json({ status: "Success", data: data });
    }
  });
};
// get products
exports.ReadProduct = (req, res) => {
  ProductsModel.find((err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};
// get by id product find
exports.ReadProductId = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  ProductsModel.find(Query, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};
// Update Products
exports.UpdateProducts = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  let reqBody = req.body;
  ProductsModel.updateOne(Query, reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};
// Delete Products
exports.DeleteProducts = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  ProductsModel.remove(Query, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};
