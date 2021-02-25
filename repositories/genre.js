

module.exports = (models) => {
    const genre_constroller = {
        getAll: async () => {
            return models.genre.query("select * from Genres");
        },
        getById: async (id) => {
            return models.genre.query("select * from Genres where id = ? LIMIT 1", [id]);
        }
    }
    
    return genre_constroller;
}
