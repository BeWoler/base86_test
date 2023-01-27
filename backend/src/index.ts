import express from 'express';
import * as dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import connectionToDB from './config/dbConnection';
import { schema } from './schema';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
app.use(express.json());

app.listen(PORT, () => {
  connectionToDB(process.env.DB_URL || '');
  console.log(`Running on ${PORT}`);
});
