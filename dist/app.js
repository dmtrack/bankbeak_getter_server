var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.options('*', cors({ origin: process.env.CLIENT_URL, optionsSuccessStatus: 200 }));
app.use(cors({ origin: process.env.CLIENT_URL, optionsSuccessStatus: 200 }));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/service', fileRouter);
app.use(handleError);
connection
    .sync({ alter: true })
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Database synced successfully, lets go!');
}))
    .catch((err) => {
    console.log('Err', err);
});
