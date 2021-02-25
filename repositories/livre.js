module.exports = (models) => {
    const book_repository = {
        getAll: async (data) => {
            return models.book.query("SELECT Books.title,Books.author,Categories.name FROM Books LEFT JOIN Categories ON Books.categoryId = Categories.id;");
        },
        getById: async (id) => {
            return models.book.query("SELECT Books.title,Books.author,Categories.name FROM Books,Categories WHERE Books.categoryId=Categories.id AND Books.id = ? LIMIT 1", [id]);
        }
    }
    
    return book_repository;
}