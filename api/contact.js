import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    // 1. Email to YOU (Notification)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Message: ${subject}`,
      text: `From: ${name} (${email})\n\nMessage: ${message}`
    });

    // 2. Email to SENDER (Professional Confirmation)
    await transporter.sendMail({
      from: `"Suraj Kumar Saw" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Message Received - Let's Build Something!",
     html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #000; padding: 20px; text-align: center;">
            <h1 style="color: #d4af37; margin: 0;">SK.</h1>
          </div>
        
          <div style="padding: 30px; text-align: center;">
         <img src="https://raw.githubusercontent.com/suraj8521-saw/Portfolio/main/public/surajprofile.jpg" 
     alt="Suraj Kumar Saw" 
     style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid #d4af37; object-fit: cover;">
            <div style="text-align: left; margin-top: 20px;">
              <h2 style="color: #333;">Hi ${name},</h2>
              <p style="color: #555; font-size: 16px;">Thanks for reaching out! I've successfully received your message regarding <strong>"${subject}"</strong>.</p>
              
              <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #d4af37; margin: 20px 0;">
                <p style="font-style: italic; color: #666;">"${message}"</p>
              </div>
              
              <p style="color: #555;">I appreciate your interest and will get back to you shortly.</p>
              <p style="color: #333; font-weight: bold;">Best Regards,<br>Suraj Kumar Saw</p>
            </div>
          </div>
          
          <div style="background: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #888;">
            <p style="margin: 0; font-weight: bold; color: #333;">Full-Stack Developer | AI & Machine Learning Enthusiast</p>
            <p style="margin: 5px 0 0 0;">Building the future of web & intelligence.</p>
          </div>
        </div>
      `,
      // Agar image attach karni hai toh ye uncomment kar dena (aur public folder mein photo honi chahiye)
      
      // attachments: [{
      //   filename: 'profile.jpg',
      //   path: 'https://your-deployed-url.com/profile.jpg', // Yahan apni live photo ka link dena
      //   cid: 'profile'
      // }]
      
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}