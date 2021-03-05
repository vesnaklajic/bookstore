module.exports = (services) => {
    const book_controller = {
        getAll: async (req, res) => {
            let result = await services.book.getAll();
            res.send(result);
        },
        getByFilter: async (req, res) => {
            const query = req.query
            const dataArray = [] // Generation array en fonction du nombre de queries
            if (query.title) dataArray.push(query.title)
            if (query.genre) dataArray.push(query.genre)
            if (query.category) dataArray.push(query.category)
            if (query.author) dataArray.push(query.author)
            console.log('data : ', dataArray)
            const queryConditionsArray = [] // Generation d'un array pour la fin de la requête SQL preparée
            if (query.title) queryConditionsArray.push(`title = ?`)
            if (query.genre) queryConditionsArray.push(`Genres.name = ?`)
            if (query.category) queryConditionsArray.push(`Categories.name = ?`)
            if (query.author) queryConditionsArray.push(`author = ?`)
            console.log('querybuilder : ', queryConditionsArray)

            if (dataArray.length < 1) { // Si aucun paramètre n'a été fourni
                let result = await services.book.getAll();
                res.send(result);
            } else {
                let result = await services.book.getByFilter(dataArray, queryConditionsArray);
                res.send(result);
            }
            
        },
    }

    return book_controller;
}