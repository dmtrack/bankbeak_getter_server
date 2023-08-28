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
import convert from 'xml-js';
import path from 'path';
import * as url from 'url';
import { responceArrayMaker } from '../lib/responceArrayMaker.js';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const targetFolder = path.join(__dirname, '../download/export');
class ConvertService {
    xmlToJson() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const targetFile = fs.readdirSync(targetFolder)[0];
                const xml = fs.readFileSync(`${targetFolder}/${targetFile}`, 'utf-8');
                const result = convert.xml2json(xml, {
                    compact: true,
                    spaces: 4,
                });
                const sourceObject = JSON.parse(result);
                return responceArrayMaker(sourceObject);
            }
            catch (e) {
                console.log('convert error');
            }
        });
    }
}
export default new ConvertService();
