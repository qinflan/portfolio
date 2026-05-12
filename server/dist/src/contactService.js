"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWD,
    },
});
const sendMail = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { senderName, senderEmail, subject, message } = options;
    const mailOptions = {
        from: {
            name: "Portfolio Form",
            address: process.env.USER,
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
        yield transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
    }
    catch (err) {
        console.error("Error sending email, please try again later...");
        console.error(err);
    }
});
exports.sendMail = sendMail;
