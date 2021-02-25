// controllers dépendencies
const services = require('../services/index');

// controllers
const user_controller = require('./user');
const cat_controller=require('./cat')

// create a controllers object for map all the controllers
const controllers = {
    user: user_controller(services), cat:cat_controller(services)
}

// export our controllers object
module.exports = controllers;