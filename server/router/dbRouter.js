const express = require('express');
const router = express.Router();
const itemController = require('../controller/petControllers.js');
const petController = require('../controller/petfinderApiController.js')
// responding to post request to add new item to DB
router.post('/', 
  itemController.createUser, 
  (req, res) => {
    res.status(200).json({});
  }
);

//responding to get request to get all items in DB
router.get('/', 
  itemController.displayList, 
  // petController.display,
  (req, res) => {
    console.log(req)
    res.status(200).json(res.locals.arrOfPetsData);
  }
);

// //responding to update request to add pet
router.put('/add', 
  itemController.addPet, 
    (req, res)=>{
     res.status(200).json({});
  }
);
// responding to update request to remove pet
router.put('/remove', 
  itemController.deletePet,
    (req, res)=>{
      res.status(200).json({});
  }
)

//responding to delete request to remove item from DB
// router.delete('/', 
// itemController.deleteUser, 
//     (req, res)=>{
//       res.status(200).json({})
//     }
// )

module.exports = router;