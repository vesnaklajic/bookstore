const jwt = require('jsonwebtoken');
const config = require('../config/env');


const verifyToken = async (req, res, next) => {
  const token = req.cookies.token || '';
  try {
    if (!token) {
      return res.status(401).json('You need to Login')
    }
    const decrypt = await jwt.verify(token, config.token_key);
    req.user = decrypt
    console.log(req.user)
    next();
  } catch (err) {
    return res.status(500).json(err.toString());
  }
};

module.exports = verifyToken;