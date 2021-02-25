// Repositories dépendencies
const models = require('../db/models/index')

// Repositories
const user_repository = require('./user')
    genres_repository = require('./genres')

// create a repositories object for map all the repositories
const repositories = {
    user: user_repository(models),
    genres: genres_repository(models)
}

// export our repositories object
module.exports = repositories;