module.exports = (models) => {
    const category_repository = {
        getAllCat: async (data) => {
            return models.cat.query("select * from Categories");
        },
        getByIdCat: async (id) => {
            return models.cat.query("select * from Categories where id = ? LIMIT 1", [id]);
        }
    }
    
    return cat_repository;
}
