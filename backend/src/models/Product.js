const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    thumbnail: String,
    name: String,
    price: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

ProductSchema.virtual("thumbnail_url").get(function () {
  return `http://localhost:3000/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Product", ProductSchema);
