const Enquiry = require("../models/enquiry");
const Brevo = require('@getbrevo/brevo');

const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

exports.createEnquiry = async (req, res) => {
  try {
    const { name, phone, product, message, email } = req.body;

    if (!name || !phone || !product || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    console.log("Before save");
    const enquiry = await Enquiry.create({ name, phone, product, message, email });
    console.log("After save");

    
    await apiInstance.sendTransacEmail({
      sender: { email: process.env.EMAIL_USER, name: "Your App" },
      to: [{ email: process.env.EMAIL_USER, name: "Owner" }],
      subject: `New Lead from ${name}`,
      htmlContent: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    console.log("After first email");

    
    await apiInstance.sendTransacEmail({
      sender: { email: process.env.EMAIL_USER, name: "Your App" },
      to: [{ email: email, name: name }],
      subject: "Thank You For Contacting Us",
      htmlContent: `
        <h2>Thank You ${name}</h2>
        <p>We have received your enquiry regarding <b>${product}</b>.</p>
        <p>Our team will contact you shortly.</p>
      `,
    });
    console.log("After second email");

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
