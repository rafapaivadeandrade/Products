const express = require("express");
const routes = express.Router();
const SessionController = require("./controllers/SessionController");
const ProductController = require("./controllers/ProductController");
const uploadconfig = require("./config/upload");
const multer = require("multer");

const upload = multer(uploadconfig);

routes.post("/sessions", SessionController.store);
routes.get("/products", ProductController.show);
routes.get("/product/:product_id", ProductController.index);
routes.post("/product", upload.single("thumbnail"), ProductController.store);
routes.put(
  "/product/:product_id",
  upload.single("thumbnail"),
  ProductController.update
);
routes.put(
  "/productnoimage/:product_id",
  upload.single("thumbnail"),

  ProductController.updatenoimage
);
routes.delete("/product/:product_id", ProductController.destroy);

module.exports = routes;
