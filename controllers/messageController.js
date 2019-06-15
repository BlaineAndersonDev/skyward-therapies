import express from 'express';
const router = require('express').Router();
const nodemailer = require('nodemailer');

// Send an Email with a message for Skyward Therapies
// POST `/api/messages/email`
router.post('/email', async (req, res) => {
  console.log(' >>> Entered Route POST `/api/messages/email`')
  console.log('req.query.name: ' + req.query.name)
  console.log('req.query.email: ' + req.query.email)
  console.log('req.query.message: ' + req.query.message)
  var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: 'SkywardTherapiesQuestions@Gmail.com',
      pass: 'skyward321!@'
    }
  });
  const mailOptions = {
    from: 'SkywardTherapies@Gmail.com', // sender address * NOTE Does not work for Google.
    to: 'SkywardTherapies@Gmail.com', //  list of receivers
    subject: req.query.name + "'s Question @ SkywardTherapies", // Subject line
    html: "<h3>From: " + "<br />" + req.query.email + "</h3><br />" + "<p>" + req.query.message + "</p>"
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  });
});

module.exports = router
