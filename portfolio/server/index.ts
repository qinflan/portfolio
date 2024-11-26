import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import contactRouter from './src/contactRoute';

dotenv.config();

// Express app type
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT: string | number = process.env.PORT || 5000
const prefix = "/api";

(async () => {
    try {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
      });
    } catch (err) {
      console.error({err});
      process.exit(1);
    }
  })();
  
  app.use(`${prefix}/contactRouter`, contactRouter);