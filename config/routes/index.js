
module.exports = (express, controllers) => {
    const user_route = require('./user');
    const category_route = require('./category');
    const book_route = require('./book');
    const genre_route= require('./genre')
    

    const routes = [
        user_route(express, controllers),
        category_route(express, controllers),
        book_route(express, controllers),
        genre_route(express, controllers)
    ]



    return routes
}