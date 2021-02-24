module.exports = (services) => {
    const user_controller = {
        getAll: async (req, res) => {
            let result = await services.user.getAll();
            res.send(result);
        },
        register: async (req, res) => {
            const { firstname, lastname, email, password } = req.body;
            const userData = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password : password
            }

            try {
                if (!email || !password)
                    res.status(400).json("missing parameters")
                else {
                    userData.password =  await services.bcrypt.hashPassword(password)
                    let result = await services.user.register(userData);
                    console.log('result ', result)
                    let user = await services.user.getById(result.insertId);
                    console.log('user  ', user)
                    await services.mailer.sendMail(user);
                    res.status(201).json("new user registered");
                }
            }
            catch (err) {
                res.status(400).json(err);
            }
        }
    }

    return user_controller;
}