const Enquiry = require("../models/enquiry");
const transporter = require("../util/emailservices");

exports.createEnquiry = async (
  req,
  res
) => {
  try {
    const {
      name,
      phone,
      product,
      message,
      email,
    } = req.body;

    if (
      !name ||
      !phone ||
      !product ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const enquiry =
      await Enquiry.create({
        name,
        phone,
        product,
        message,
        email,
      });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `New Lead from ${name}`,

      html: `
        <h2>New Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Product:</strong> ${product}</p>

        <p><strong>Message:</strong> ${message}</p>
      `,
    });

     await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You For Contacting Us",

      html: `
        <h2>Thank You ${name}</h2>
        <p>We have received your enquiry regarding <b>${product}</b>.</p>
        <p>Our team will contact you shortly.</p>
      `
    });

    res.status(201).json({
      success: true,
      message:
        "Enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getEnquiries = async (
  req,
  res
) => {
  try {
    const enquiries =
      await Enquiry.find().sort({
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