const User = require("../models/User");
const Product = require("../models/Product");

module.exports = {
  async index(req, res) {
    const product = await Product.findById(req.params.product_id);

    return res.json(product);
  },
  async show(req, res) {
    const { user_id } = req.headers;
    const products = await Product.find({ user: user_id });
    return res.json(products);
  },
  async destroy(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params.product_id);

      return res.status(200).send();
    } catch (err) {
      return res
        .status(400)
        .send({ error: "There was a problem trying to delete product" });
    }
  },
  async store(req, res) {
    const { filename } = req.file;
    const { price, name } = req.body;
    const { user_id } = req.headers;
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "Cannot find user in database" });
    }
    const product = await Product.create({
      user: user_id,
      thumbnail: filename,
      name,
      price,
    });

    return res.json(product);
  },
  async update(req, res) {
    try {
      const { filename } = req.file;
      const { price, name } = req.body;
      const { user_id } = req.headers;
      const { product_id } = req.params;

      const user = await User.findById(user_id);

      if (!user) {
        return res.status(400).json({ error: "Cannot find user on database" });
      }
      const product = await Product.findByIdAndUpdate(
        product_id,
        {
          thumbnail: filename,
          name,
          price,
        },
        { new: true }
      );

      await product.save();

      return res.send({ product });
    } catch (err) {
      return res.status(400).send({ err: "Cannot update product" });
    }
  },
  async updatenoimage(req, res) {
    try {
      const { price, name } = req.body;
      const { user_id } = req.headers;
      const { product_id } = req.params;
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(400).json({ error: "Cannot find user on database" });
      }
      const product = await Product.findByIdAndUpdate(
        product_id,
        {
          name,
          price,
        },
        { new: true }
      );

      await product.save();

      return res.send({ product });
    } catch (err) {
      return res.status(400).send({ err: "Cannot update product" });
    }
  },
};
