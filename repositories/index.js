// Repositories dépendencies
const models = require('../db/models/index')

// Repositories
const user_repository = require('./user'),
    genres_repository = require('./genre'),
    category_repository = require('./category'),
    book_repository =require('./livre');

// create a repositories object for map all the repositories
const repositories = {
    user: user_repository(models),
    genre: genres_repository(models),
    category: category_repository(models),
    book: book_repository(models)
}

// export our repositories object
module.exports = repositories;