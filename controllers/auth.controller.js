const jwt = require("jsonwebtoken");

const User = require("../models/users.model");

const login = async (req, res) => {
  const { email, password } = req.body;

  const verifyUserByEmail = await User.findOne({ where: { email } });

  if (!verifyUserByEmail) {
    return res.status(404).json({ error: "Oe, el mail no lo pille" });
  }

  const verifyPassword = await bcrypt.compare(
    password,
    verifyUserByEmail.password
  );

  if (!verifyPassword) {
    return res.status(404).json({ error: "Pass incorrecta" });
  }

  const expireTime = Math.floor(new Date() / 1000) + 3600;

  const token = jwt.sign(
    {
      exp: expireTime,
      data: {
        id: verifyUserByEmail.id,
        email: verifyUserByEmail.email,
        firstname: verifyUserByEmail.firstname,
        lastname: verifyUserByEmail.lastname,
      },
    },
    process.env.SECRET_KEY
  );

  res.json(token);
};

const signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    return res
      .status(400)
      .json({ error: "rellena toos los campoh, ponte vioh" });
  }

  const verifyUser = await User.findOne({ where: { email } });
  if (verifyUser) {
    return res.status(404).json({ error: "Oe, este usuario ya existe" });
  }

  try {
    const passwordEncrypt = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: passwordEncrypt,
    });

    const expireTime = Math.floor(new Date() / 1000) + 3600;

    const token = jwt.sign(
      {
        exp: expireTime,
        data: {
          id: newUser.id,
          email: newUser.email,
          firstname: newUser.firstname,
          lastname: newUser.lastname,
        },
      },
      process.env.SECRET_KEY
    );

    res.json(token)

  } catch (error) {
    return res.status(400).json(error)
  }
};

const readToken = async (req, res) => {
    const {token} = req.body

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        res.json(decoded)
    } catch (error) {
        return res.status(400).json(error)
    }
}


module.exports = {
    login,
    signup,
    readToken
}