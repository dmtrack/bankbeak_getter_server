import fs from 'fs';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import { RequestHandler } from 'express';

import fetchService from '../services/fetch.service.js';
import compressService from '../services/compress.service.js';
import convertService from '../services/convert.service.js';
const zipSource = path.join(__dirname, '../download/file.zip');
const targetFolder = path.join(__dirname, '../download/export');

class FileController {
    downloadBeakData: RequestHandler = async (req, res, next) => {
        try {
            await fetchService.downloadBeakData();
            await compressService.unzipFiles();
            const bankCards = await convertService.xmlToJson();
            console.log(bankCards, new Date().toUTCString());

            await fs.rm(
                zipSource,
                {
                    force: true,
                },
                (err) => {
                    if (err) {
                        console.log('delete error');
                    }
                }
            );

            const targetFile = fs.readdirSync(targetFolder)[0];
            await fs.rmSync(`${targetFolder}/${targetFile}`, {
                force: true,
            });
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
