const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var cors = require("cors");
const cookieParser = require("cookie-parser");

const router = require("./routes/userRoute");

dotenv.config({
  path: "./config.env",
});

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user/", router);

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Connection failed.");
      return err;
    }
    console.log("Successfully connected to mongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on PORT no. ${process.env.PORT}`);
    });
  }
);
