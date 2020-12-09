const User = require("../../models/user");

module.exports = async (req, res) => {
  const fromQuery = {
    authId: req.query.from,
    "requests.to": { $ne: req.query.to },
  };
  const toQuery = {
    authId: req.query.to,
    "requests.from": { $ne: req.query.from },
  };

  const request = {
    from: req.query.from,
    to: req.query.to.toString(),
    type: "FRIEND",
    status: "PENDING",
  };

  User.findOneAndUpdate(
    fromQuery,
    { $push: { requests: request } },
    (err, updatedUser) => {
      if (err) throw err;
      console.log(updatedUser);
    }
  );

  User.findOneAndUpdate(
    toQuery,
    { $push: { requests: request } },
    (err, updatedUser) => {
      if (err) throw err;
      console.log(updatedUser);
    }
  );

  res.status(200).send();
};
