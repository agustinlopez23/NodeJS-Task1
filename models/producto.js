const { getProductByCategory } = require("../controller/productoController");

let getProducts = () => {
  return fetch("https://fakestoreapi.com/products").then(res => res.json());
};
let getProductsCategories = () => {
  return fetch("https://fakestoreapi.com/products/categories").then(res =>
    res.json()
  );
};

async function getListProducts() {
  let productos = await getProducts();
  return productos;
}
async function getProductbyId(id) {
  let producto = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    res => res.json()
  );
  return producto;
}
async function getProductsbyCategory() {
  let products = await getProducts();
  let categories = await getProductsCategories();

  let catOne = products.filter(product => product.category === categories[0]);
  let catTwo = products.filter(product => product.category === categories[1]);
  let catThree = products.filter(product => product.category === categories[2]);
  let catFour = products.filter(product => product.category === categories[3]);

  return {
    [categories[0]]: catOne,
    [categories[1]]: catTwo,
    [categories[2]]: catThree,
    [categories[3]]: catFour,
  };
}
async function getProductsbyPriceOrder() {
  let products = await getListProducts();
  let productsFiltered = products.map(product => ({
    id: product.id,
    product: product.title,
    price: product.price,
  }));

  return productsFiltered;
}
async function getProductsbyPriceOrderAndCategory() {
  let products = await getProducts();
  let categories = await getProductsCategories();

  let catOne = products.filter(product => product.category === categories[0]);
  let catTwo = products.filter(product => product.category === categories[1]);
  let catThree = products.filter(product => product.category === categories[2]);
  let catFour = products.filter(product => product.category === categories[3]);

  let electronicsExpensive = catOne
    .sort((a, b) => b.price - a.price)
    .splice(0, 1);
  let jewerelyExpensive = catTwo.sort((a, b) => b.price - a.price).splice(0, 1);
  let mensExpensive = catThree.sort((a, b) => b.price - a.price).splice(0, 1);
  let womensExpensive = catFour.sort((a, b) => b.price - a.price).splice(0, 1);
  return {
    electronicsExpensive,
    jewerelyExpensive,
    mensExpensive,
    womensExpensive,
  };
}

let products = {
  getProducts,
  getProductsbyCategory,
  getListProducts,
  getProductbyId,
  getProductsbyPriceOrder,
  getProductsbyPriceOrderAndCategory,
};
module.exports = products;
