const nodemailer = require("nodemailer");

console.log("BREVO_USER:", process.env.BREVO_USER);
console.log("BREVO_PASS exists:", !!process.env.BREVO_PASS);

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.log("SMTP ERROR:", error);
  } else {
    console.log("SMTP READY");
  }
});

module.exports = transporter;
