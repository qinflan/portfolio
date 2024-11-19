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