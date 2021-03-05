// server dépendencies
const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');

// server routes/controllers
const controllers = require('../controllers/index'),
      routes = require('./routes/index');

const app = express();
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(routes(express, controllers));

module.exports = app;