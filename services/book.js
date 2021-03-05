module.exports = (repositories) => {
    const book_service = {
        getAll: async (data) => {
            return repositories.book.getAll();
        },
        getByFilter: async (dataArray, queryConditionsArray) => {
            try {
                const rows = await repositories.book.getByFilter(dataArray, queryConditionsArray);
                return rows;
            } catch (error) {
                console.error(error)
            }
        }
    }

   return book_service;
}