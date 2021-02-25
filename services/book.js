module.exports = (repositories) => {
    const livre_service = {
        getAll: async (data) => {
            return repositories.book.getAll();
        },
        getById: async (id) => {
            const rows = await repositories.book.getById(id);
            return rows[0];
        }
    }

   return livre_service;
}