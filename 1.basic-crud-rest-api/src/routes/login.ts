import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const userPassword = '1234';
  if (userPassword !== password) {
    return res.status(403).json({
      error: 'invalid login',
    });
  }

  const token = jwt.sign(req.body, 'secret', { expiresIn: '1h' });

  res.cookie('token', token, {
    httpOnly: true,
  });
  res.send('done');
};
