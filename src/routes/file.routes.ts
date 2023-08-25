import { Router } from 'express';
import fileController from '../controllers/fileController.js';

const fileRouter = Router();

fileRouter.get('/getbeak', fileController.downloadBeakData);

export default fileRouter;

//
