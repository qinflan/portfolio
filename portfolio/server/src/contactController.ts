import { Request, Response } from "express";

interface IEmail {
    fName: string;
    lName: string;
    email: string;
    subject: string;
    body: string;
}

// handles data passed in from contct form to be validated and formatted
export const contactController = async (req:Request, res:Response): Promise<void> => {
    const {fName, lName, email, subject, body}: IEmail = req.body;

    try {
        
    } catch (err) {
        res.status(500).json("Internal Server Error")
        console.error("Unable to send email, please try again later")
    }
};