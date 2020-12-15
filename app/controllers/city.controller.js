const db = require("../models");
const City = db.cities;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.s_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const cities = {
    // s_id: req.body.s_id,
    s_name: req.body.s_name,
  };

  // Save Tutorial in the database
  City.create(cities)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAllCities = (req, res) => {
  const s_name = req.query.s_name;
  var condition = s_name ? { s_name: { [Op.like]: `%${s_name}%` } } : null;

  City.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
