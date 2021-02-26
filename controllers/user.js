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
        password: password,
      };

      try {
        if (!email || !password) res.status(400).json("missing parameters");
        else {
          userData.password = await services.bcrypt.hashPassword(password);
          let result = await services.user.register(userData);
          console.log("result", result);
          let user = await services.user.getById(result.insertId);
          await services.mailer.sendMail(user);
          res.status(201).json("new user registered");
        }
      } catch (err) {
        res.status(400).json(err);
      }
    },
    login: async (req, res) => {
      const userLogin = {
        email: req.body.email,
        password: req.body.password,
      };
      try {
        if (!userLogin.email || !userLogin.password)
          res.status(400).json("please complete all fields");
        else {
          const userFound = await services.user.findByEmail(userLogin.email);
          console.log("useeerrr", userFound);
          if (!userFound) {
            res.status(404).json("You have to register first");
          } else {
            const passwordMatch = await services.bcrypt.comparePassword(
              userLogin.password,
              userFound.password
            );
            if (!passwordMatch) {
              res.status(400).json("Password is not correct");
            } else {
              const tokenData = {
                id: userFound.id,
                firstname: userFound.firstname,
                lastname: userFound.lastname,
                email: userFound.email
              }
              const token = await services.jwt.createToken(tokenData)
              res.cookie('token', token, {
                expires: new Date(Date.now() + 60000), // milisecondes = 1 min
                secure: false, // set to true if your using https
                httpOnly: true,
              }).send(`Identification par cookie réussie, date : ${Date.now()}, expire : ${Date(Date.now() + 100000)}`);
            }
          }
        }
      } catch (err) {
        console.error(err);
      }
    },
  };
  return user_controller;
};
