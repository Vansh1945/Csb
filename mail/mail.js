const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendEmailOnContact = functions.firestore
  .document("contacts/{contactId}")
  .onCreate(async (snap) => {
    const data = snap.data();

    await transporter.sendMail({
      from: process.env.EMAIL_USER || "jiwanjyoti712@gmail.com",
      to: process.env.EMAIL_USER || "jiwanjyoti712@gmail.com",
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
