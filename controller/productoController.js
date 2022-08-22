const {
  getListProducts,
  getProductbyId,
  getProductsbyCategory,
  getProductsbyPriceOrder,
  getProductsbyPriceOrderAndCategory,
} = require("../models/producto");

const getList = async (req, res) => {
  let result = await getListProducts();
  let titleResults = result.map(producto => producto);

  res.status(200).send(titleResults);
};
const getProductById = async (req, res) => {
  let id = req.params.id;
  let product = await getProductbyId(id);
  console.log(`User request product with the id: ${id}`);

  res.status(200).send(product);
};
const getProductByCategory = async (req, res) => {
  let product = await getProductsbyCategory();
  console.log(`User request product with the products categories`);
  res.status(200).send(product);
};
const getProductByPriceTitleAndId = async (req, res) => {
  let products = await getProductsbyPriceOrder();
  console.log(`User request products filtered by title,price,id`);

  res.status(200).send(products);
};
const getProductByPrice = async (req, res) => {
  let { q } = req.params;
  //console.log(q);
  let products = await getProductsbyPriceOrder();

  if (q === "up") {
    console.log(
      `User request product with the products prices width ascendant order`
    );
    res.status(200).send(products.sort((a, b) => a.price - b.price));
  } else if (q === "down") {
    console.log(
      `User request product with the products prices width descendant order`
    );
    res.status(200).send(products.sort((a, b) => b.price - a.price));
  } else {
    res.status(200).send("query order doesnt exist");
  }
};

const getProductByExpensivePrice = async (req, res) => {
  let expensives = await getProductsbyPriceOrderAndCategory();
  console.log("User request with de most Expensive products by category");
  res.status(200).send(expensives);
};

let productoController = {
  getList,
  getProductById,
  getProductByCategory,
  getProductByPrice,
  getProductByPriceTitleAndId,
  getProductByExpensivePrice,
};
module.exports = productoController;
