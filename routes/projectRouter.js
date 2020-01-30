const express = require('express');

const ProjectModel = require('./projectModel.js');
const db = require('../data/db.js');

const router = express.Router();

//ENDPINTS HERE

//create POST Car
router.post('/create', (request, responce) => {
  ProjectModel.addCar(request.body)
    .then(carAdded => {
      responce.status(200).json(carAdded)
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "Post Failed."} )
    })
});


//delete Car
router.delete('/del/:id', (request, responce) => {
  //db("cars").where({ id: request.params.id }).del()
  ProjectModel.delCar(request.params.id)
    .then(numRemoved => { responce.json(numRemoved); })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "DEL Failed."} )
    })
});

//SANITY GET
router.get('/', (request, responce) => {
  ProjectModel.allCars()
    .then(cars => {
      responce.status(200).json(cars)
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "GET Failed."} )
    })
});

module.exports = router;
