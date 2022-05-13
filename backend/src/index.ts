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

const cutString = (str: string): string => {
  let count = 1
  let returnString = ''
  for (const char of str) {
    if (count === 3) {
      returnString = returnString + char
      count = 0
    }
    count += 1
  }
  return returnString
}

app.post('/test', (req: Request, res: Response) => {
  const returnString: string = cutString(req.body.string_to_cut)
  res.send({return_string: returnString});
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));