config = require("../config/env");

module.exports = (jwt) => {
  const jwt_service = {
    createToken: async (user) => {
    user.password = null // on cache le password
      return await jwt.sign(user, config.token_key, { expiresIn: '6h'});
    },
  };

  return jwt_service;
};
