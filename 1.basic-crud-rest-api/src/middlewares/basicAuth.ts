import { NextFunction, Request, Response } from 'express';
import auth from 'basic-auth';

export const basicAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('basicAuth');
  const user = await auth(req);

  const username = 'test';
  const password = '1234';
  if (user?.name === username && user?.pass === password) {
    console.log('basicAuth success');
    next();
  } else {
    console.log('access denied');
    res.statusCode = 401;
    res.end('access denied');
  }
};
