var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import fetchService from '../services/fetch.service.js';
import compressService from '../services/compress.service.js';
import convertService from '../services/convert.service.js';
const zipSource = path.join(__dirname, '../download/file.zip');
const targetFolder = path.join(__dirname, '../download/export');
class FileController {
    constructor() {
        this.downloadBeakData = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield fetchService.downloadBeakData();
                yield compressService.unzipFiles();
                const bankCards = yield convertService.xmlToJson();
                console.log(bankCards, new Date().toUTCString());
                yield fs.rmSync(zipSource, {
                    force: true,
                });
                const targetFile = fs.readdirSync(targetFolder)[0];
                yield fs.rmSync(`${targetFolder}/${targetFile}`, {
                    force: true,
                });
            }
            catch (e) {
                next(e);
            }
        });
        this.downloadBeakDataSchedule = (req, res, next) => {
            setInterval(() => {
                this.downloadBeakData(req, res, next);
            }, 3000);
        };
    }
}
export default new FileController();
