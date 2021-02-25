module.exports = (models) => {
    const category_repository = {
        getAll: async () => {
            return models.category.query("select * from Categories");
        },
        getById: async (id) => {
            return models.category.query("select * from Categories where id = ? LIMIT 1", [id]);
        }
    }
    
    return category_repository;
}
