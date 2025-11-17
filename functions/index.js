const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
});

exports.sendEmailOnContact = functions.firestore
  .document("contacts/{contactId}")
  .onCreate(async (snap) => {
    const data = snap.data();

    await transporter.sendMail({
      from: functions.config().email.user,
      to: "jiwanjyoti712@gmail.com",
      subject: "New Contact Message",
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service Type:</strong> ${data["service-type"]}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    return console.log("Email sent!");
  });
