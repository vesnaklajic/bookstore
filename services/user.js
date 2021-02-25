module.exports = (repositories) => {
  const user_service = {
    getAll: async () => {
      return repositories.user.getAll();
    },
    register: async (data) => {
      return repositories.user.register(data);
    },
    getById: async (id) => {
      const rows = await repositories.user.getById(id);
      return rows[0];
    },
    findByEmail: async (data) => {
      const rows = await repositories.user.getByEmail(data);
      return rows[0];
    },
  };

  return user_service;
};
