import express from 'express';
import contactRouter from './contactRoute'

const router = express.Router();

router.use("/contact", contactRouter)

export default router;