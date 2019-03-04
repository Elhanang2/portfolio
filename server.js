
var express = require('express');
var app = express();
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('./config/config'); 
var PORT =4000;
var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
router.post('/send', (req, res, next) => {
    var username = req.body.username
    var email = req.body.email
    var phone =req.body.phone
    var company =req.body.company
    var message = req.body.message
    var content = `name: ${username} \n  email: ${email} \n phone: ${phone} \n company: ${company} \n message: ${message} `
  
    var mail = {
      from: username,
      to: 'aynazewdg37@gmail.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })
  app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
