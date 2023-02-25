require("dotenv").config();
require("express-async-errors");
// ! I believe this is what the 'express-async-errors' package is doing under the hood:
// -------------------------------------------------------------------
// ? const use = (fn) => (req, res, next) =>
// ? Promise.resolve(fn(req, res, next).catch(next));
// -------------------------------------------------------------------

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const connectDB = require("./DB/connectDB");
const notFoundMiddleware = require("./Middleware/not-found");
const errorHandlerMiddleware = require("./Middleware/error-handler");
const productsRoute = require("./Routes/products");

const app = express();

app.use(
  cors({
    origin: "https://ljh-c.onrender.com",
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productsRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`App listening on port ${PORT}...`));
  } catch (err) {
    throw new Error(err.message);
  }
};

start();
