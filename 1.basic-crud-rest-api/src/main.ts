import express, { Request, Response } from 'express';
import { basicAuth } from './middlewares/basicAuth';
import { cookiJwtAuth } from './middlewares/jwtAuth';
import { login } from './routes/login';

const app = express();
app.use(express.json());
// app.use(basicAuth); basic auth
// app.use(cookiJwtAuth); jwt verify
app.get('/', cookiJwtAuth, (req: Request, res: Response) => {
  const user = req.user;
  res.send(user);
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

app.post('/login', login);

app.listen(3000);
console.log('hi');
