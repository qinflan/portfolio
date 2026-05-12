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
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = void 0;
const contactService_1 = require("./contactService");
// handles data passed in from contact form to be validated and formatted
const contactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Name, email, subject, body } = req.body;
    // validate req body
    if (!Name || !email || !subject || !body) {
        res.status(400).json({ message: "All fields are required." });
        return;
    }
    try {
        yield (0, contactService_1.sendMail)({
            senderName: Name,
            senderEmail: email,
            subject: subject,
            message: body,
        });
        res.status(200).json({ message: "Email sent successfully!" });
    }
    catch (err) {
        console.error({ message: "Unable to send email, please try again later" });
        res.status(500).json("Internal Server Error");
    }
});
exports.contactController = contactController;
