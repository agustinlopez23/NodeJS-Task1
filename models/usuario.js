let getUser = () => {
  return fetch("https://fakestoreapi.com/users").then((res) => res.json());
};

async function getListadoUser() {
  let usuarios = await getUser();
  return usuarios;
}
async function getUserbyId(id) {
  let user = await fetch(`https://fakestoreapi.com/users/${id}`).then((res) =>
    res.json()
  );
  return user;
}

let user = {
  getUserbyId,
  getUser,
  getListadoUser,
};
module.exports = user;
