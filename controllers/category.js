module.exports = (services) => {
    const category_controller = {
        getAll: async (req, res) => {
            let result = await services.category.getAll();
            res.send(result);
        },
    }

    return category_controller;
}