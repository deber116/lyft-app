import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  // res.json({msg: 'This is CORS-enabled for a Single Route'})
  res.send({msg: 'Hello from the TypeScript world!'});
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));