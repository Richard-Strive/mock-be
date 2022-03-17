const express = require("express");
const getHistoryPurchase = require("./product.js");

const route = express.Router();

// PERSONAL PROFILE INFOS
route.get("/history", (req, res) => {
  try {
    const product = getHistoryPurchase();
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
