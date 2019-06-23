const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// set up nodemailer and get creds
const nodemailer = require("nodemailer")

// set proper route to creds if it needs to be modified
const creds = require('./utilities/email-config')

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

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.post('/send/mail', (req, res) => {
    // set vars for incoming POST
    const { name, email, message } = req.body

    // send mail
    main(name, email, message).catch(console.error)

    // send success response
    res.send('success')
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})