// service dépendencies
const repositories = require('../repositories/index'),
    nodemailer = require("nodemailer"),
    bcrypt = require("bcrypt");
    jwt = require('jsonwebtoken')

// services
const user_service = require('./user'),
    genres_service = require('./genres'),
    mailer_service = require('./mailer'),
    bcrypt_service = require('./bcrypt'),
    jwt_service = require('./jwt')
    livre_service=require('./livre')

// create a services object for map all the services
const services = {
    genres: genres_service(repositories),
    user: user_service(repositories),
    mailer: mailer_service(nodemailer),
    bcrypt: bcrypt_service(bcrypt),
    jwt: jwt_service(jwt),
    livre: livre_service(livre)
}

// export our service object
module.exports = services