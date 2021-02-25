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
          const user = await services.user.findByEmail(userLogin.email);
          console.log("useeerrr", user);
          if (!user) {
            res.status(404).json("You have to register first");
          } else {
            console.log(userLogin.email);
            const passwordMatch = await services.bcrypt.comparePassword(
              userLogin.password,
              user.password
            );
            if (!passwordMatch) {
              res.status(400).json("Password is not correct");
            } else {
              const token = await services.jwt.createToken(
                JSON.parse(JSON.stringify(user))
              );
              res.status(200).json({
                message: "connection success",
                token: token,
              });
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
