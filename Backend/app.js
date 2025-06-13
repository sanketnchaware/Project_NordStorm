const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/config.env" });
const express = require("express");
const connect = require("./src/config/db.config");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3333;

app.use(cors());

const productController = require("./src/controller/product.controller");
app.use("/", productController);

app.listen(PORT, async () => {
  console.log(`The server is running on ${PORT}`);
  try {
    await connect();
    console.log("Database Connected !");
  } catch (error) {
    console.log("error:", error);
  }
});
