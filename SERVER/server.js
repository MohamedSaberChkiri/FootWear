require("dotenv").config();
const { ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const getProductsRoute = require("./routes/getProductsRoute");
const resetPasswordRoutes = require("./routes/resetPasswordRoutes");
const userCartRoutes = require("./routes/userCartRoutes");
const paymentSession = require("./routes/paymentSession");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", authRoutes);
app.use("/api", getProductsRoute);
app.use("/api", resetPasswordRoutes);
app.use("/api", userCartRoutes);
app.use("/api", paymentSession);

passwordDB = process.env.DATABASE_PASSWORD;

const uri = `mongodb+srv://FootWear:${passwordDB}@footwear.dhb4soj.mongodb.net/FootWearProducts?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5500, () => {
      console.log("Server is running on port 5500");
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));
