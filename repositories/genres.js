

module.exports = (models) => {
    const genres_constroller = {
        getAll: async (genres) => {
            return models.genres.query("select * from Genres");
        },
        getById: async (id) => {
            return models.genres.query("select * from Genres where id = ? LIMIT 1", [id]);
        }
    }
    
    return genres_constroller;
}
