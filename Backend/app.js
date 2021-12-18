const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/config.env" });
const express = require("express");
const connect = require("./src/config/db.config");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 2325;

const productController = require("./src/controller/product.controller");
app.use("/", productController);

app.listen(PORT, async () => {
  await connect();
  console.log(`The server is running on ${PORT}`);
});
