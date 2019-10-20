// set up nodemailer and get creds
const nodemailer = require("nodemailer")
// set proper route to creds if it needs to be modified
const creds = require('../utilities/email-config')

async function main(name, email, message){

  // create transporter
  let transporter = nodemailer.createTransport({
    host: creds.HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: creds.USER,
      pass: creds.PASS
    },
  });

  // send mail
  let info = await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: creds.USER, // list of receivers
    subject: "Website Contact Form", // Subject line
    text: message, // plain text body
    envelope: {
      from: `"${name}" <${email}>`,
      to: creds.USER,
      replyTo: `"${name}" <${email}>`
    },
    messageId: `"${name}" <${email}>`,
  });
}