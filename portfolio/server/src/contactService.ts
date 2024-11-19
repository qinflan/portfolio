import { createTransport } from "nodemailer";

const transporter = createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWD,
    },
});

const mailOptions = {
    from: {
        name: "Portfolio Form",
        address: process.env.USER,
    },
    to: process.env.USER,
    subject: "test", // pass in req.body 
    text: "Hello World!" // pass in req.body
}

const sendMail = async (transporter: any, mailOptions: any) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
    } catch (err) {
        console.error("Error sending email, please try again later...")
    }
}
sendMail(transporter, mailOptions)