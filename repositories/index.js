// Repositories dépendencies
const models = require('../db/models/index')

// Repositories
const user_repository = require('./user');
const cat_repository=require('./category');
const livre_repository=require('./livre');

// create a repositories object for map all the repositories
const repositories = {
    user: user_repository(models),
    cat: cat_repository(models),
    livre: livre_repository(models)
}

// export our repositories object
module.exports = repositories;