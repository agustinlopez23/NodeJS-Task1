const user = require("../models/usuario");

const { getListadoUser } = require("../models/usuario");
let getCart = () => {
  return fetch("https://fakestoreapi.com/carts").then((res) => res.json());
};

async function getListCart() {
  let carrito = await getCart();
  return carrito;
}
async function getCartbyId(id) {
  let carrito = await fetch(`https://fakestoreapi.com/carts/${id}`).then(
    (res) => res.json()
  );
  return carrito;
}
async function getCartbigs() {
  let carts = await getCart();
  let users = await getListadoUser();
  let bigCarts = carts.filter((cart) => {
    //aprovecho el callback para filtrar los usuarios que tienen mas de 2 productos
    if (cart.products.length > 2) {
      //agregar el usuario por carts.userID
      let user = users.find((user) => cart.userId === user.id);
      //agregar el usatio por carts.userID
      cart.userName = user.username;
      return cart;
    }
  });
  return bigCarts;
}
let carrito = {
  getCartbyId,
  getCart,
  getCartbigs,
  getListCart,
};
module.exports = carrito;
