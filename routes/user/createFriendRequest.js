const User = require("../../models/user");

module.exports = async (req, res) => {
  const fromQuery = { authId: req.query.from };
  const toQuery = { authId: req.query.to };

  const request = {
    from: req.query.from,
    to: req.query.to.toString(),
    type: "FRIEND",
    status: "PENDING",
  };

  User.findOneAndUpdate(
    fromQuery,
    { $push: { requests: request } },
    { new: true, upsert: true },
    (err, updatedUser) => {
      if (err) throw err;
      console.log(updatedUser);
    }
  );

  User.findOneAndUpdate(
    toQuery,
    { $push: { requests: request } },
    { new: true, upsert: true },
    (err, updatedUser) => {
      if (err) throw err;
      console.log(updatedUser);
    }
  );

  res.status(200).send();
};
