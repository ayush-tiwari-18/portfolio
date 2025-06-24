import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, message ,phone} = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,        // Your Gmail address
        pass: process.env.EMAIL_PASS,        // App-specific password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}}`,
      text: `Hi Ayush! There's a new message from ${email}. Their phone number is ${phone}: \n ${message}`,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
