
module.exports = (express, controllers) => {
    const user_route = require('./user');
    const cat_route=require('./cat');
    const livre_route=require('./livre');
    const genres_route= require('./genres')
    

    const routes = [
        user_route(express, controllers),
        cat_route(express, controllers),
        livre_route(express, controllers),
        genres_route(express, controllers)
    ]



    return routes
}