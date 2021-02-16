//controllers for the database CRUD functions

const model = require('../models/petModels.js');

// const mongoose = require('mongoose'); // might not need this
const itemController = {};

//controller for creating new user in DB
itemController.createUser = function(req,res,next) {
  model.create({'username': req.body, 'pets': []} /*req.body is username in DB*/)
  .then(status => {
    console.log('successfully created user status:', status);
    return next();
  })  
  .catch(err => {
    next({
      log: 'There was an error on itemController.createItem',
      message: 'Cannot create new item'
    });
  }); 
};

//controller for displaying items from DB
 itemController.displayList = (req,res,next) => {
//   console.log(req.body)
//   // const jsonobj = JSON.parse(req.body)
//   model.find((err, result) =>{
//     if(err){
//       console.log('it not working', err)
//       next()
//     } 
//     else {
//       console.log('from displayList',result)
//       next()
//     }
//   })
//  }



    
    model.find()
    .then(query => {
      console.log('hello displayList middleware', query)
      res.locals.listOfPets = query.pets
      console.log(res.locals.listOfPets)
      return next();
    })
    .catch(err => {
      next({
        log: 'There was an error on itemController.displayList',
        message: 'Cannot find item'
      });
    });
  }
    

// controller for updating (adding Pet from DB) item
itemController.addPet = (req,res) => {
  model.find({'username': req.body /* insert name for username property in Sharon's request */}).exec()
  .then(query => {
    const newArr = query.pets.push(/* id */);
    model.findOneAndUpdate({'username': req.body}, {'pets': newArr})
  })
  .catch(err => {
    next({
      log: 'There was an error on itemController.addPet',
      message: 'Cannot add item'
    });
  });
};


//controller for updating (deleting Pet from DB) item

itemController.deletePet = (req,res) => {
  model.find(res.body /* username of user to delete pet from*/, (err, query)=>{
    if(err) console.log('there was an error getting the user object in DB see: petControllers.js, itemController.deletePet')
    else {
      const target = req.body /* id of pet to be removed*/
      const newArr = [];
      for(let i = 0; i < query.pets.length; i++){
        if(query.pets[i] === target){
          continue;
        }
        newArr.push(query.pets[i])
      }
      model.findOneAndUpdate({"username" : res.body}/*username */, {"pets": newArr})
    }
  })
}

module.exports = itemController;