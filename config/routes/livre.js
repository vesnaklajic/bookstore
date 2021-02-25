module.exports = (express, controllers) => {
    
    const router = express.Router();

    router.route('/livres')
        .get(controllers.user.getAll)
        .post(controllers.user.register);

    return router;
};