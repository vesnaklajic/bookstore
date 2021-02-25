// models dépendency
const db = require('../config');

// models
const User = require('./user');
const Cat=require('./category');

// create a object models for map all the models
const models = {
    user: new User(db),
    cat:new Cat(db)
}

// export our model object
module.exports = models;