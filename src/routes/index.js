const express = require("express");
const req = require("express/lib/request");
const getHistoryPurchase = require("./product.js");

const route = express.Router();

// PERSONAL PROFILE INFOS
route.get("/search/city", (req, res) => {
  try {
    const product = getHistoryPurchase();
    console.log("This is the product--->",product)
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
});

route.get("/search/city/:city", (req, res) => {
  try {
    const products = getHistoryPurchase();
   console.log(req.params.city) 

 const finalProd= products.filter(product => product.localtion.toUpperCase() == req.params.city.toUpperCase() )

    res.status(200).send(finalProd);
  } catch (error) {
    console.log(error);
  }
});

/*route.get("/search", (req, res) => {
  try {
    const product = getHistoryPurchase();
    console.log("This is the product--->",product)
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
});*/

//Server mock-be
//https://mock-be.herokuapp.com/

module.exports = route;
