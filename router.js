const express = require("express");
const router = express.Router();
const {
  getList,
  getProductById,
  getProductByCategory,
  getProductByPrice,

  getProductByPriceTitleAndId,
  getProductByExpensivePrice,
} = require("./controller/productoController");
const {
  getCarts,
  getCartById,
  getBigCarts,
} = require("./controller/carritoController");
const {
  getUser,
  getUserById,
  getFirstUser,
} = require("./controller/userController");
const { notFound } = require("./middlewares/errorHandler");
const { date, helloWorld } = require("./middlewares/dates");

//middlewares
router.use("/", [date], helloWorld);
//routes
router.get("/", (req, res) => {
  res.send(
    "Hello World! First Practice Work of NodeJS, mi name is Marcelo Agustin Lopez Ramallo"
  );
});
//products
router.get("/products/categories", getProductByCategory);
router.get("/products", getList);

router.get("/products/:id", getProductById);
//carts
router.get("/bigcarts", getBigCarts);
router.get("/carts", getCarts);
router.get("/carts/:id", getCartById);
//users
router.get("/users/first", getFirstUser);
router.get("/users", getUser);
router.get("/users/:id", getUserById);
//price
router.get("/prices", getProductByPriceTitleAndId);
router.get(`/prices/:q`, getProductByPrice);
//price
router.get("/expensive", getProductByExpensivePrice);

//notFound
router.use(notFound);
module.exports = router;
