// service dépendencies
const repositories = require('../repositories/index'),
    nodemailer = require("nodemailer"),
    bcrypt = require("bcrypt");
    jwt = require('jsonwebtoken')

// services
const user_service = require('./user'),
    genre_service = require('./genre'),
    mailer_service = require('./mailer'),
    bcrypt_service = require('./bcrypt'),
    jwt_service = require('./jwt'),
    book_service = require('./book'),
    category_service = require('./category')

// create a services object for map all the services
const services = {
    genre: genre_service(repositories),
    user: user_service(repositories),
    book: book_service(repositories),
    category: category_service(repositories),
    mailer: mailer_service(nodemailer),
    bcrypt: bcrypt_service(bcrypt),
    jwt: jwt_service(jwt)
}

// export our service object
module.exports = services