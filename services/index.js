// service dépendencies
const repositories = require('../repositories/index'),
    nodemailer = require("nodemailer"),
    bcrypt = require("bcrypt");

// services
const user_service = require('./user'),
genres_service = require('./genres')
    mailer_service = require('./mailer');
    bcrypt_service = require('./bcrypt');
    

// create a services object for map all the services
const services = {
    genres: genres_service(repositories),
    user: user_service(repositories),
    mailer: mailer_service(nodemailer),
    bcrypt: bcrypt_service(bcrypt)
}

// export our service object
module.exports = services;