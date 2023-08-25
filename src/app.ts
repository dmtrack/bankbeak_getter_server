import express from 'express';
import dotenv from 'dotenv';
import connection from './db/config.js';
import pkg from 'body-parser';
const { urlencoded, json } = pkg;
import cors from 'cors';
import http from 'http';

import fileRouter from './routes/file.routes.js';
import handleError from './middleware/error-middleware.js';

export const app = express();
export const server = http.createServer(app);

dotenv.config();

app.options(
    '*',
    cors({ origin: process.env.CLIENT_URL, optionsSuccessStatus: 200 })
);
app.use(cors({ origin: process.env.CLIENT_URL, optionsSuccessStatus: 200 }));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/service', fileRouter);
app.use(handleError);

connection
    .sync({ alter: true })
    .then(async () => {
        console.log('Database synced successfully, lets go!');
    })
    .catch((err: any) => {
        console.log('Err', err);
    });
