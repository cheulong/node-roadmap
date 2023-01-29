import express, { Request, Response } from 'express';
import { basicAuth } from './middlewares/basicAuth';

const app = express();
app.use(express.json());
app.use(basicAuth);
app.get('/', (req: Request, res: Response) => {
  res.send('hi');
});

app.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(id);
});

app.post('/', (req: Request, res: Response) => {
  const { id } = req.body;
  res.send(id);
});

app.put('/', (req: Request, res: Response) => {
  const { id } = req.body;
  res.send(id);
});

app.listen(3000);
console.log('hi');
