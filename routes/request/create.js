const Request = require("../../models/request");

module.exports = async (req, res) => {
  const newRequest = new Request({
    type: req.body.type,
    requesterAuthId: req.body.requesterAuthId,
    receiverAuthId: req.body.receiverAuthId,
    placeId: req.body.placeId,
  });

  await newRequest.save((err, request) => {
    if (err) {
      if (err.code != 11000) console.log(err);
    }
    res.status(201).send(request);
  });
};
