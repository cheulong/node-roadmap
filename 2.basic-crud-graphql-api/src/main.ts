import express, { Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/schema';

const app = express();

const root = {
  hello: () => {
    return 'hello';
  },
};
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000);
