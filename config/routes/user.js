const verifyToken = require('../../middlewares/verifyToken')

module.exports = (express, controllers) => {
  const router = express.Router();

  router
    .route("/users")
    .get(verifyToken ,controllers.user.getAll)
    .post(controllers.user.register);

  router.post('/login', controllers.user.login);

  return router;
};
