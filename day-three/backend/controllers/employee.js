const get = (req, res) => {
  const email = req.query.email;
  const name = req.query.name;

  const user = {
    name,
    email,
  };

  res.send(user);
};

module.exports.employeeGet = get;
