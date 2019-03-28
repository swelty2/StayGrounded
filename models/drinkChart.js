const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    drinkName : String,
    milk : {
        type: String,
        enum: ['Almond','Coconut','NonFat','Whole','2%','Soy']
    },
    size : {
        type: String,
        enum: ['Short','Tall','Grande']
    },
    toppings : {
        type : String,
        enum : ['Caramel','Whip Cream','Chocolate Syrup']
    }
});

module.exports = mongoose.model('Drink', drinkSchema);
