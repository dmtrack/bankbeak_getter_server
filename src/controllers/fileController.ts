import { RequestHandler } from 'express';

import fetchService from '../services/fetch.service.js';
import compressService from '../services/compress.service.js';
import dbService from '../services/db.service.js';
import convertService from '../services/convert.service.js';
import { NextFunction } from 'express-serve-static-core';

class FileController {
    downloadBeakData: RequestHandler = async (req, res, next) => {
        try {
            await fetchService.downloadBeakData();
            await compressService.unzipFiles();
            const bankCards = await convertService.xmlToJson();
            console.log(bankCards, new Date().toUTCString());
        } catch (e) {
            next(e);
        }
    };

    downloadBeakDataSchedule: RequestHandler = (req, res, next) => {
        setInterval(() => {
            this.downloadBeakData(req, res, next);
        }, 3000);
    };
}

export default new FileController();
