import express from 'express';
import contactRouter from './contactRoute'

const router = express.Router();

router.use("/contact")

export default router;