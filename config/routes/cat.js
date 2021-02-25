module.exports = (express, controllers) => {
    
    const router = express.Router();

    router.route('/cat')
        .get(controllers.cat.getAllCat)
        .post(controllers.cat.register);

    return router;
};