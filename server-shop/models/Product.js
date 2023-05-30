const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true }, // tên sp
    desc: { type: String, required: true, },
    img: { type: String, required: true }, // hình ảnh
    categories: { type: Array },
    size: { type: String }, //kích thước
    color: { type: String }, // màu sắc
    price: { type: Number, required: true },//giá
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);