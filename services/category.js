
module.exports = (repositories, bcrypt) => {
    const cat_service = {
        getAllCat: async (data) => {
            return repositories.cat.getAllCat();
        },
        getByIdCat: async (id) => {
            const rows = await repositories.cat.getByIdCat(id);
            return rows[0];
        }
    }

   return cat_service;
}
