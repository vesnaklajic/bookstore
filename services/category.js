
module.exports = (repositories, bcrypt) => {
    const cat_service = {
        getAll: async (data) => {
            return repositories.cat.getAll();
        },
        getById: async (id) => {
            const rows = await repositories.cat.getById(id);
            return rows[0];
        }
    }

   return cat_service;
}
