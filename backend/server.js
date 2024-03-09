const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./controllers/ErrorHandler");
const AuthRoutes = require("./controllers/userControllers");
const app = express();
app.use(express.json());
dotenv.config();
connectDB();
app.use("/api/user",AuthRoutes );
app.use(notFound)
app.use(errorHandler)

app.listen(5000, (req, res) => {
  console.log("server is running at port 5000");
});
