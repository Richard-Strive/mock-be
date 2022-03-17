require("dotenv").config();

const express = require("express");
const productsRouter = require("./routes");
const server = express();

server.use(express.json());

server.use("/products", productsRouter);

server.listen(process.env.PORT || 5000, () => {
  console.log("The server is successfully started");
});
