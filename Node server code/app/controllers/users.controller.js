const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;


exports.getUserByEmail = (req, res) => {
  const email = req.params.email;
  db.sequelize.query("select * from users where email=?",
  { replacements: [email]}).then((data)=> {
    console.log(data[0]);
    
    res.send(data[0]);
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Tutorial with id=" + id
    });
  });
}

exports.updatePassword = (req, res) => {
  const email = req.params.email;
  const newPassword = req.params.data;
  console.log("email "+email+ "pwd "+newPassword);
  
  db.sequelize.query("update users SET password =? where email=?",
  { replacements: [newPassword,email]}).then((data)=> {
    console.log(data[0]);
    
    res.send(data[0]);
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving Tutorial with id=" + id
    });
  });
}