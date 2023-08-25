import { Router } from 'express';
import fileController from '../controllers/fileController.js';

const fileRouter = Router();

fileRouter.get('/getbeak', fileController.downloadBeakData);
fileRouter.get('/getbeakschedule', fileController.downloadBeakDataSchedule);

export default fileRouter;

//
