module.exports = (express, controllers) => {
    
    const router = express.Router();

    router.route('/cat')
        .get(controllers.cat.getAll)
        .post(controllers.cat.register);

    return router;
};