module.exports = (services) => {
    const cat_controller = {
        getAll: async (req, res) => {
            let result = await services.cat.getAll();
            res.send(result);
        },
        register: async (req, res) => {
            const { name } = req.body;
            const catData = {
                name: name
                           }
        }
    }

    return cat_controller;
}