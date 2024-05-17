import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import checkToken from './authentication/auth';
import connect from './database/database';

import {
  categoriesRouter,
  orderRouter,
  productsRouter,
  usersRouter,
} from './routes/index';
import { relationship } from './models/relationship';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3001;

relationship();

app.use(cors());

// Other middleware
app.use(checkToken);
app.use(express.json());

// Routes
app.use('/admin/products', productsRouter);
app.use('/admin/categories', categoriesRouter);
app.use('/admin/users', usersRouter);
app.use('/admin/orders', orderRouter);

app.options('/admin/products', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'PUT, GET, HEAD, POST, DELETE, OPTIONS, PATCH');
  res.status(200).end();
});

// Default route
app.get('/admin', (req, res) => {
  res.send('response from root router admin');
});

app.listen(port, async () => {
  await connect();
  console.log(`listening on port: ${port}`);
});
