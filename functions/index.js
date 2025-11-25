require('dotenv').config();
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

    try {
      console.log("Preparing to send email to admin for new contact message...");
      // Send email to admin
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
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
      console.log("Email sent to admin successfully.");

      // Send reverse email to customer
      if (data.email) {
        console.log(`Preparing to send thank you email to customer: ${data.email} ...`);
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: data.email,
          subject: "Thank you for contacting us",
          html: `
            <h2>Hello ${data.name ? data.name : 'Customer'},</h2>
            <p>Thank you for reaching out to us regarding "${data["service-type"]}". We have received your message and will get back to you shortly.</p>
            <p><strong>Your Message:</strong></p>
            <p>${data.message}</p>
            <br/>
            <p>Best regards,</p>
            <p>The Admin Team</p>
          `,
        });
        console.log("Thank you email sent to customer successfully.");
      }

    } catch (error) {
      console.error("Error sending emails on contact creation:", error, error.stack);
    }

    return null;
  });

exports.sendEmailOnAdminReply = functions.firestore
  .document("contacts/{contactId}/replies/{replyId}")
  .onCreate(async (snap, context) => {
    const replyData = snap.data();
    const { contactId } = context.params;

    try {
      console.log(`Reply document created for contact ${contactId}. Beginning email send process...`);
      const contactDoc = await admin.firestore().collection("contacts").doc(contactId).get();
      if (!contactDoc.exists) {
        console.error(`Contact document ${contactId} not found!`);
        return null;
      }

      const contactData = contactDoc.data();
      const customerEmail = contactData.email;
      const customerName = contactData.name || "Customer";

      if (!customerEmail) {
        console.error(`No email found for contact ${contactId}. Cannot send reply email.`);
        return null;
      }

      if (!replyData.message) {
        console.error(`Reply document ${snap.id} has no message field. Email will not be sent.`);
        return null;
      }

      console.log(`Sending reply email to customer at ${customerEmail}...`);
      // Send email with admin reply to customer
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: customerEmail,
        subject: "Reply from Admin regarding your inquiry",
        html: `
          <h2>Hello ${customerName},</h2>
          <p>Thank you for reaching out to us regarding "${contactData["service-type"]}".</p>
          <p><strong>Admin Reply:</strong></p>
          <p>${replyData.message}</p>
          <br/>
          <p>Best regards,</p>
          <p>The Admin Team</p>
        `,
      });
      console.log(`Reply email sent successfully to customer ${customerEmail} for contact ${contactId}.`);
    } catch (error) {
      console.error("Error sending admin reply email:", error, error.stack);
    }

    return null;
  });
