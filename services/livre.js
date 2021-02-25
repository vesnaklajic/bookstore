module.exports = (repositories, bcrypt) => {
    const livre_service = {
        getAll: async (data) => {
            return repositories.livre.getAll();
        },
        register: async (data) => {
            return repositories.livre.register(data);
        },
        getById: async (id) => {
            const rows = await repositories.livre.getById(id);
            return rows[0];
        }
    }

   return livre_service;
}