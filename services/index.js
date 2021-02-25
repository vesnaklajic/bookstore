// service dépendencies
const repositories = require('../repositories/index'),
    nodemailer = require("nodemailer"),
    bcrypt = require("bcrypt");

// services
const user_service = require('./user'),
    mailer_service = require('./mailer');
    bcrypt_service = require('./bcrypt');
    livre_service=require('./livre')

// create a services object for map all the services
const services = {
    user: user_service(repositories),
    mailer: mailer_service(nodemailer),
    bcrypt: bcrypt_service(bcrypt),
    livre: livre_service(livre)
}

// export our service object
module.exports = services;