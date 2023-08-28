var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CustomError } from '../exceptions/CustomError.js';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import fetch from 'node-fetch';
class FetchService {
    downloadBeakData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const streamPipeline = promisify(pipeline);
                const response = yield fetch('http://www.cbr.ru/s/newbik');
                if (!response.ok)
                    throw new Error(`unexpected response ${response.statusText}`);
                if (response.body) {
                    yield streamPipeline(response.body, createWriteStream('./src/download/file.zip'));
                }
            }
            catch (e) {
                new CustomError('download beak data error');
            }
        });
    }
}
export default new FetchService();
