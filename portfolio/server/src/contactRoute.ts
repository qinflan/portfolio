import express, {Response, Request, Router} from 'express';

const router: Router = express.Router();

// API endpoint for submitting contact form
router.post("/sendContactEmail")

export default router;