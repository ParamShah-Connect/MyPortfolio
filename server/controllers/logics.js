import nodemailer from "nodemailer";
import dotenv from "dotenv"

dotenv.config();

export default async function sendMessage(req, res) {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }
  
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "param270604@gmail.com", 
        pass: process.env.password,    
      },
    });
      
    const mailOptions = {
      from: email,  
      to: "param270604@gmail.com",  
      subject: subject,
      text: message,
      html: `
        <h3>Message from: ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: "Message sent successfully!" });
    } catch (error) {
      res.status(500).json({ error: error });
    }

}

