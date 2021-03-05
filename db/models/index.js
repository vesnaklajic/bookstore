// models dépendency
const db = require('../config');

// models
const User = require('./user');
const Category = require('./category');
const Book = require('./book');
const Genre = require('./genre')



// create a object models for map all the models
const models = {
    user: new User(db),
    category: new Category(db),
    book: new Book(db),
    genre: new Genre(db)
}

// export our model object
module.exports = models;