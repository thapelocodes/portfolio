import Message from "../models/Message";
import nodemailer from "nodemailer";

const createMessage = async (req: any, res: any) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_SENDER_PWD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `New message from ${name} with email ${email}`,
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error)
        return res
          .status(500)
          .json({ message: "Error sending message", error });
      res.status(201).json({ message: "Message sent", info });
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating message", error });
  }
};

export default createMessage;
