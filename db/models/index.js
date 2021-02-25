// models dépendency
const db = require('../config');

// models
const User = require('./user');
const Cat=require('./cat');
const Livre=require('./livre');


// create a object models for map all the models
const models = {
    user: new User(db),
    cat:new Cat(db),
    livre:new Livre(db)
}

// export our model object
module.exports = models;