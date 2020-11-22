const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();

mongoose.connect(
  "mongodb+srv://user:user@cluster0.kiaqu.mongodb.net/store?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);
app.listen(port);
