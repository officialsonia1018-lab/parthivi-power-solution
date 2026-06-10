const Enquiry = require("../models/enquiry");
const axios = require("axios");

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

    const enquiry = await Enquiry.create({
      name,
      phone,
      product,
      message,
      email,
    });

    console.log("After save");

    // Owner Email
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          email: process.env.EMAIL_USER,
          name: "Parthivi Power Solution",
        },
        to: [
          {
            email: process.env.EMAIL_USER,
          },
        ],
        subject: `New Lead from ${name}`,
        htmlContent: `
          <h2>New Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Email:</strong> ${email || "Not Provided"}</p>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("After first email");

    // Customer Email
    if (email) {
      await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: {
            email: process.env.EMAIL_USER,
            name: "Parthivi Power Solution",
          },
          to: [
            {
              email: email,
            },
          ],
          subject: "Thank You For Contacting Us",
          htmlContent: `
            <h2>Thank You ${name}</h2>
            <p>We have received your enquiry regarding <b>${product}</b>.</p>
            <p>Our team will contact you shortly.</p>
          `,
        },
        {
          headers: {
            "api-key": process.env.BREVO_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("After second email");
    }

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error(
      "Error:",
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        "Internal Server Error",
    });
  }
};

exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      enquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
