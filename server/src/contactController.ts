import { Request, Response } from "express";
import { sendMail } from "./contactService";

interface IEmail {
    Name: string;
    email: string;
    subject: string;
    body: string;
}

// handles data passed in from contact form to be validated and formatted
export const contactController = async (req:Request, res:Response): Promise<void> => {
    const {Name, email, subject, body}: IEmail = req.body;

    // validate req body
    if ( !Name || !email || !subject || !body) {
        res.status(400).json({ message: "All fields are required." });
        return;
    }

    try {
        await sendMail({
            senderName: Name,
            senderEmail: email,
            subject: subject,
            message: body,

    });
        res.status(200).json({ message: "Email sent successfully!" });
        
    } catch (err) {
        console.error({ message: "Unable to send email, please try again later" })
        res.status(500).json("Internal Server Error")
    }
};