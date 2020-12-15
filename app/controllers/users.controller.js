const db = require("../models");
const nodemailer = require("nodemailer");
const User = db.users;
const Op = db.Sequelize.Op;

let transporter = nodemailer.createTransport({
  host:"172.27.172.202",
  secure:false,
  port:25,
  tls:{
    ciphers:'SSLv3',
    rejectUnauthorized: false
  },
  auth:{
    user:"dadaramj@evolvingsols.com",
    pass:"Tiger@321"
  }
});

let mailOptions = {
  from:"dadaramj@evolvingsols.com",
  to:"arshadp@cybage.com",
  subject:"Testing SMTP",
  text:"Hello Arshad, This is SMTP mail test."
}

transporter.sendMail(mailOptions,(error,success)=>{
  if(error){
    return console.log(error);
  }else{
    console.log("Email sent!!!" + success.response);
  }
})

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