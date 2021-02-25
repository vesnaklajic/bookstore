const genres = require('./genres');

module.exports = (express, controllers) => {
    const user_route = require('./user');
    const genres_route= require('./genres')

    const routes = [
        user_route(express, controllers),
        genres_route(express, controllers)
    ]

    return routes
}