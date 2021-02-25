module.exports = (repositories) => {
    const genre_service = {
        getAll: async (genres) => {
            return repositories.genres.getAll();
        },
        getById: async (id) => {
            const rows = await repositories.genre.getById(id);
            return rows[0];
        }
    }

   return genre_service;
}
