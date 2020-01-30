const db = require('../data/db.js');

module.exports = {
  allCars,
  findCarByID,
  addCar,
  delCar,
}

function allCars() {
  return db.select('*').from("cars");
}

function findCarByID(id) {
  return db('cars')
    .where({ id })
    .first();
}

function addCar(carObj) {
  return db("cars")
    .insert(carObj, "id")
    .then(ids => {
      const [id] = ids;
      return findCarByID(id);
    });
}

function delCar(idPassed) {
  return db("cars").where({ id: idPassed }).del()
}
