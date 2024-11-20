import nodemailer from "nodemailer";
import dotenv from 'dotenv'

dotenv.config();

interface IEmailOptions {
    senderName: string;
    senderEmail: string;
    subject: string;
    message: string;
}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWD,
    },
});

export const sendMail = async (options: IEmailOptions): Promise<void> => {
    const { senderName, senderEmail, subject, message } = options;

    const mailOptions = {
        from: {
            name: "Portfolio Form",
            address: process.env.USER!,
        },
        to: process.env.USER,
        subject: subject, 
        text: `
        You received a new message from your portfolio contact form:
        
        Name: ${senderName}
        Email: ${senderEmail}
        
        Message:
        ${message}
        
        `,
    };


    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
    } catch (err) {
        console.error("Error sending email, please try again later...")
        console.error(err);
    }
}