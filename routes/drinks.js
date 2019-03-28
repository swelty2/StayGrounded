const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Drinks = require('../models/drinkChart');


router.get("/:drinkName", function(req,res) {
   console.log('Getting drink info for drink name :', req.params.drinkName);
   Drinks.findOne({drinkName : req.params.drinkName}).exec()
       .then( drinkExists => {
           console.log('Drink Detail from DB : ', drinkExists);
           if(drinkExists.drinkName === req.params.drinkName){
               res.status(200).json({
                   message : 'Drink detail found',
                   drinkDetail : {
                       drinkName : drinkExists.drinkName,
                       milk : drinkExists.milk,
                       size : drinkExists.size,
                       toppings : drinkExists.toppings
                   }
               })
           }else{
               //drink info not found
               res.status(404).json({
                   message : 'Drink info not found in database'
               })
           }
       }).catch( err => {
           res.status(500).json({
               message : 'Error reading drink information',
               error : err
           })
   })
});

router.post('/', function(req,res) {
   console.log('Inserting a new drink ', req.body);
   Drinks.find({drinkName: req.body.drinkName}).exec()
       .then(drinkExists => {
           if(drinkExists.length >= 1){
               console.log('Drink data exists in DB');
           }else{
               //Drink does not exist. Adding new one
               console.log('Drink data does not exist');
               const drinkDetail = new Drinks({
                   _id: mongoose.Types.ObjectId(),
                   drinkName : req.body.drinkName,
                   milk : req.body.milk,
                   size : req.body.size,
                   toppings : req.body.toppings
               });
               drinkDetail.save()
                   .then(result => {
                       console.log('New drink info added');
                       res.status(200).json({
                           message : 'Drink Created',
                           userDetails: {
                               drinkName : result.drinkName,
                               milk : result.milk,
                               size : result.size,
                               toppings : result.toppings
                           }
                       })
                   }).catch(err => {
                   console.log('Error saving drink info', err);
                   res.status(500).json({
                       message: 'Error saving drink info. Try again',
                       error: err
                   })
               });
           }
       })
});


module.exports = router;
