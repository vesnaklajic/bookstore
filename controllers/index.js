// controllers dépendencies
const genres = require('../config/routes/genres');
const services = require('../services/index');

// controllers
const user_controller = require('./user');
const genres_constroller = require('./genres')
const cat_controller=require('./cat')



// create a controllers object for map all the controllers
const controllers = {
    user: user_controller(services),
    cat:cat_controller(services),
    genre: genres_constroller(services)
}

// export our controllers object
module.exports = controllers;



