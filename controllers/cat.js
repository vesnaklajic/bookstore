module.exports = (services) => {
    const cat_controller = {
        getAllCat: async (req, res) => {
            let result = await services.cat.getAllCat();
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