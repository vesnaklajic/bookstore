// models dépendency
const db = require('../config');

// models
const User = require('./user'),
Genre = require('./genres')

// create a object models for map all the models
const models = {
    user: new User(db),
    genres: new Genre(db)
}

// export our model object
module.exports = models;