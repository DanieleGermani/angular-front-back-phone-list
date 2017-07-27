var express = require('express');
var router = express.Router();
const Phone = require('../models/Phone');

/* Get all Phones. */
router.get('/', (req,res,next) => {
    Phone.find({}).then(phones =>{
      res.json(phones);
    })
    .catch( e => res.json(e));
});

/* Get all Phones. */
router.get('/:id', (req,res,next) => {
    Phone.findById(req.params.id).then(phone =>{
      res.json(phone);
    })
    .catch( e => res.json(e));
});



router.delete('/:id', (req,res,next) => {
    Phone.remove({ _id: req.params.id }).then( () =>{
      res.json({
        message:"Phone removed"
      });
    })
    .catch( e => res.json(e));
});


/* Get all Phones. */
router.put('/:id', (req,res,next) => {
  const updates = {
     brand: req.body.brand,
     name: req.body.name,
     specs: req.body.specs,
     image: req.body.image
   };

    Phone.findByIdAndUpdate(req.params.id, updates).then(phone =>{
      res.json(phone);
    })
    .catch( e => res.json(e));
});

/* CREATE a new Phone. */
router.post('/', (req, res, next) => {
  const thePhone = new Phone({
    brand: req.body.brand,
    name: req.body.name,
    specs: req.body.specs,
    image: req.body.image || ''
  }).save()
  .then( phone => {
      console.log(`Se ha creado el telefono ID:${phone._id}`);
      res.json({
        message: 'New Phone created!',
        id: phone._id
      });
    })
  .catch( e => res.json(e));
});

module.exports = router;
