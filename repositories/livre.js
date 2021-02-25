module.exports = (models) => {
    const livre_repository = {
        getAll: async (data) => {
            return models.livre.query("SELECT Books.title,Books.author,Categories.name FROM Books,Categories WHERE Books.categoryId=Categories.id");
        },
        getById: async (id) => {
            return models.livre.query("SELECT Books.title,Books.author,Categories.name FROM Books,Categories WHERE Books.categoryId=Categories.id AND Books.id = ? LIMIT 1", [id]);
        }
    }
    
    return livre_repository;
}