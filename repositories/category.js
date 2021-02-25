module.exports = (models) => {
    const category_repository = {
        getAll: async (data) => {
            return models.cat.query("select * from Categories");
        },
        getById: async (id) => {
            return models.cat.query("select * from Categories where id = ? LIMIT 1", [id]);
        }
    }
    
    return cat_repository;
}
