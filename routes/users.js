const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('../models/users');


/* GET user listings. */
router.get("/:userName", function(req, res) {
  const name = req.params.userName;
  console.log('Reading a user name : ' , req.params.userName);
  Users.findOne({userName: name}).exec()
      .then( userExists => {
        if(userExists.length >= 1){
            console.log('Getting user info ', userExists);
            res.status(200).json({userExists})
        }else{
            console.log('User does not exist');
            res.status(404).json({userExists})
        }
      }).catch( err => {
        console.log('Error fetching user name', err);
        res.status(500).json({err});
  });
});

router.post('/', function(req,res) {
  console.log('Getting into post', req.body);
  Users.find({userName: req.body.userName}).exec()
      .then(userExists => {
        if(userExists.length >= 1){
          //user exist.update user info
            console.log('Existing user - ', userExists.userName);
            Users.updateOne({userName : req.body.userName},
                {$set:{pastOrder1: req.body.pastOrder1, pastOrder2: req.body.pastOrder2,
                        pastOrder3: req.body.pastOrder3}}).exec()
        }else{
          //user does not exist. Create new user route
            console.log('new user coming in ', req.body);
            const newUser = new Users({
                _id: mongoose.Types.ObjectId(),
                userName : req.body.userName,
                pastOrder1 : req.body.pastOrder1,
                pastOrder2 : req.body.pastOrder2,
                pastOrder3 : req.body.pastOrder3
            });
            newUser.save()
                .then(result => {
                  console.log('New user information saved successfully');
                  res.status(200).json({
                      message : 'User Created',
                      userDetails: {
                        userName : result.userName,
                        pastOrder1 : result.pastOrder1,
                        pastOrder2 : result.pastOrder2,
                        pastOrder3 : result.pastOrder3
                      }
                  })
                }).catch(err => {
                  console.log('Error saving user info', err);
                  res.status(500).json({
                      message: 'Error saving user info. Try again',
                      error: err
                  })
            });
        }
      }).catch(err => {
        console('Inside the final catch', err);
        res.status(500).json({
          message: 'Error finding user info. Try again',
          error: err
      })
  })
});

module.exports = router;
