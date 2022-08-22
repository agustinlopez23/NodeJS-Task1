const { getListCart, getCartbyId, getCartbigs } = require("../models/carrito");
const { getListadoUser } = require("../models/usuario");

const getCarts = async (req, res) => {
  let result = await getListCart();
  // let results = result.map((producto) => producto.title);
  res.status(200).send(result);
};
const getCartById = async (req, res) => {
  let id = req.params.id;
  let carrito = await getCartbyId(id);
  console.log(`User request carrito with the id: ${id}`);

  res.status(200).send(carrito);
};
const getBigCarts = async (req, res) => {
  let bigcarts = await getCartbigs();

  res.status(200).send(bigcarts);
};

let carritoController = {
  getCarts,
  getCartById,
  getBigCarts,
};
module.exports = carritoController;
