module.exports = (models) => {
    const book_repository = {
        getAll: async () => {
            return await models.book.query("SELECT Books.id, Books.title,Books.author, Books.stock, Categories.name AS categoryName FROM Books LEFT JOIN Categories ON Books.categoryId = Categories.id;");
        },
        getByFilter: async (dataArray, queryConditionsArray) => {
            const queryConditionsString = queryConditionsArray.join(' AND ')
            const sqlQuery = `SELECT bookId, title, author, stock, categoryId, Categories.name as categoryName, genreId, Genres.name AS genreName FROM BooksGenre
            LEFT JOIN Books ON Books.id = BooksGenre.bookId
            LEFT JOIN Genres ON Genres.id = BooksGenre.genreId
            LEFT JOIN Categories ON Categories.id = Books.categoryId 
            WHERE ${queryConditionsString}
            GROUP BY bookId;`
            return await models.book.query(sqlQuery, dataArray)
        }
    }
    
    return book_repository;
}