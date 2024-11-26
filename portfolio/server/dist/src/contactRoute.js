"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactController_1 = require("./contactController");
const router = express_1.default.Router();
// API endpoint for submitting contact form
router.post("/sendContactEmail", contactController_1.contactController);
exports.default = router;
