import express, {Router} from 'express';
import { contactController } from './contactController';

const router: Router = express.Router();

// API endpoint for submitting contact form
router.post("/sendContactEmail", contactController)

export default router;