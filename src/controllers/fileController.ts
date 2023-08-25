import { RequestHandler } from 'express';

import fetchService from '../services/fetch.service.js';
import compressService from '../services/compress.service.js';
import dbService from '../services/db.service.js';
import convertService from '../services/convert.service.js';

class FileController {
    downloadBeakData: RequestHandler = async (req, res, next) => {
        try {
            await fetchService.downloadBeakData();
            await compressService.unzipFiles();
            const bankCards = await convertService.xmlToJson();

            res.json(bankCards);
        } catch (e) {
            next(e);
        }
    };
}

export default new FileController();
