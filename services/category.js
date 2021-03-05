
module.exports = (repositories) => {
    const category_service = {
        getAll: async () => {
            return repositories.category.getAll();
        },
        getById: async (id) => {
            const rows = await repositories.category.getById(id);
            return rows[0];
        }
    }

   return category_service;
}
