
// get all the genres 
module.exports = (services) => {
  const genre_controller = {
    getAll: async (req, res) => {
      await services.genres.getAll().then((result) => {
        res.send(result);
      });
    },
  };
  return genre_controller;
};
