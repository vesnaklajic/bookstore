// controllers dépendencies
const services = require('../services/index');

// controllers
const user_controller = require('./user');
const genre_constroller = require('./genre');
const category_controller= require('./category');
const book_controller = require('./book');



// create a controllers object for map all the controllers
const controllers = {
    user: user_controller(services),
    category: category_controller(services),
    genre: genre_constroller(services),
    book: book_controller(services)
}

// export our controllers object
module.exports = controllers;



