
//get all the genres  
module.exports = (services) => {
  const genre_controller = {
    getAll: async (req, res) => {
     const result = await services.genre.getAll() 
        res.send(result);
    },
  };
  return genre_controller;
};
