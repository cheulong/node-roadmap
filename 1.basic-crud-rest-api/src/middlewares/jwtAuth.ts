import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const cookiJwtAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    const user = jwt.verify(token, 'secret');
    console.log({ user });

    req.user = user;
  } catch (error) {
    // res.clearCookie('token');
    res.end('access denied');
  }
};
