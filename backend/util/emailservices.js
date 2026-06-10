const Brevo = require('@getbrevo/brevo');

const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

async function sendEmail(toEmail, subject, htmlContent) {
  const email = {
    sender: { email: "owner@example.com", name: "Owner" },
    to: [{ email: toEmail }],
    subject: subject,
    htmlContent: htmlContent,
  };

  try {
    const result = await apiInstance.sendTransacEmail(email);
    console.log("Email sent successfully:", result);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = sendEmail;
