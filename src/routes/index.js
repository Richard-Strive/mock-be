const express = require("express");
const getHistoryPurchase = require("./product.js");

const route = express.Router();

// PERSONAL PROFILE INFOS
route.get("/search", (req, res) => {
  try {
    const product = getHistoryPurchase();
    console.log("This is the product--->",product)
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
});

//Server mock-be
//https://mock-be.herokuapp.com/

module.exports = route;
