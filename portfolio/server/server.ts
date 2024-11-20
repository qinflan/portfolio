import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv'
import contactRouter from './src/contactRoute';

dotenv.config();

// Express app type
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

const PORT: string | number = process.env.PORT || 9000;
const prefix = "/api";

app.get("/api", (req: Request, res: Response) => {
  res.json("Hello World!");
});

(async () => {
    try {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
      });
    } catch (err) {
      console.error("Server unable to start, please try again later");
      process.exit(1);
    }
  })();
  
  app.use(`${prefix}/contactRouter`, contactRouter);
