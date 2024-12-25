import express from "express";
import dotenv from "dotenv"
import products from "./data/product.js";
dotenv.config()
const app = express();
const PORT = process.env.PORT;

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
    const product = products.find((p)=>p._id===req.params.id);
    res.json(product);
  });

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
