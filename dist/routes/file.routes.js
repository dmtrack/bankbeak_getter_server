import { Router } from 'express';
import fileController from '../controllers/fileController.js';
const fileRouter = Router();
fileRouter.get('/getbeak', fileController.downloadBeakData);
fileRouter.get('/getbeakschedule', fileController.downloadBeakDataSchedule);
fileRouter.get('/', (req, res) => {
    const a = 4;
    if (a > 5) {
        res.send('a > 5');
    }
    else
        res.send('Hello world!!');
});
export default fileRouter;
//
