module.exports = (models) => {
    const user_repository = {
        getAll: async (data) => {
            return models.user.query("select * from users");
        },
        register: async (data) => {
            return models.user.query("INSERT INTO users (firstname, lastname, email, password) VALUES (?,?,?,?);",
             [data.firstname, data.lastname, data.email, data.password])
        },
        getById: async (id) => {
            return models.user.query("select * from users where id = ? LIMIT 1", [id]);
        }
    }
    
    return user_repository;
}
