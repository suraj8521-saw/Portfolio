import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS Headers allow karne ke liye (taaki frontend request block na ho)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request (Pre-flight check)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Basic Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Bhai, saare fields bharne zaroori hain!' });
  }

  // Nodemailer config setup using Google App Password
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Vercel dashboard se aayega
      pass: process.env.EMAIL_PASS  // Vercel dashboard se aayega
    }
  });

  try {
    // Email triggers
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // Tujhe jis mail par receive karna hai (Tera khud ka email)
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email // Taaki tu inbox se direct reply kare toh user ko jaye
    });

    return res.status(200).json({ success: true, message: 'Message transmitted successfully!' });
  } catch (error) {
    return res.status(500).json({ error: 'Email send karne mein dikkat aayi.', details: error.message });
  }
}