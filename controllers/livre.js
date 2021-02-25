module.exports = (services) => {
    const livre_controller = {
        getAll: async (req, res) => {
            let result = await services.livre.getAll();
            res.send(result);
        },
        register: async (req, res) => {
            const { title, author, cat } = req.body;
            const userData = {
                title: title,
                author:author,
                cat: cat
            }

                    }
    }

    return livre_controller;
}