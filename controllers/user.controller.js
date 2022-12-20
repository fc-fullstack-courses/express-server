const usersDB = [];

module.exports.createUser = async (req, res) => {
  const newUser = {
    ...req.body,
    id: Date.now(),
  };

  usersDB.push(newUser);

  res.send(newUser);
};

module.exports.getUsers = async (req, res) => {
  res.send(usersDB);
};
