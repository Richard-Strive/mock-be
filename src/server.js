const express = require("express");
const productsRouter = require("./routes");
const server = express();

const port = 3001;
server.use(express.json());

server.use("/products", productsRouter);

server.listen(port, () => {
  console.log("The server is successfully started");
});
