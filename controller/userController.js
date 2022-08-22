const { getListadoUser, getUserbyId } = require("../models/usuario");

const getUser = async (req, res) => {
  let result = await getListadoUser();

  res.status(200).send(result);
};
const getUserById = async (req, res) => {
  let id = req.params.id;
  let user = await getUserbyId(id);
  console.log(`User request user with the id: ${id}`);

  res.status(200).send(user);
};
const getFirstUser = async (req, res) => {
  let users = await getListadoUser();
  let firstUsers = users.filter(user => user.id <= 3);
  console.log(`User request user with the first 3 users`);

  res.status(200).send(firstUsers);
};
let userController = {
  getUser,
  getUserById,
  getFirstUser,
};
module.exports = userController;
