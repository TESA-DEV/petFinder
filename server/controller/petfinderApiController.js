//controllers for the petfinder API queries

const secret = require('../secrets.js');
const petfinder = require("@petfinder/petfinder-js");
const petSearch = new petfinder.Client({apiKey: secret.petApiKey, secret: secret.petApiSecret});

const petController = {};
//find all pets in local area by type
petController.search = (req,res,next) => {
  petSearch.animal.search({type: req.params.type, location: req.params.location})
  .then(function (query) {
 // Do something with `response.data.animals`
  res.locals.query = query.data;
  console.log('pet controller hghghg', query.data)
 
  next();
  })
  .catch(err => {
    next({
      log: 'There was an express error on petfinderApiController animal.search',
      message: 'Cannot search new item'
    });
  }); 
} 

//find all pets in DB by id
petController.display = (req,res,next) => {
  const arrOfPetData = [];
  console.log('hello displayyy middleware')
  for (let i = 0; i < res.locals.listOfPets.length; i++){
    fetch(`https://api.petfinder.com/v2/animals/${listOfPets[i]}`)
    .then(data => arrOfPetData.push(data))
  }
  res.locals.arrOfPetData = arrOfPetData;
  return next();
}

module.exports = petController;