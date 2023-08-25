import fs from 'fs';
import convert from 'xml-js';
import path from 'path';
import * as url from 'url';
import { IBankCards } from '../types/bank.interface.js';
import { responceArrayMaker } from '../lib/responceArrayMaker.js';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const targetFolder = path.join(__dirname, '../download/export');

class ConvertService {
    async xmlToJson() {
        try {
            const targetFile = fs.readdirSync(targetFolder)[0];
            const xml = fs.readFileSync(
                `${targetFolder}/${targetFile}`,
                'utf-8'
            );
            const result = convert.xml2json(xml, {
                compact: true,
                spaces: 4,
            });
            const sourceObject: IBankCards = JSON.parse(result);
            return responceArrayMaker(sourceObject);
        } catch (e) {
            console.log('convert error');
        }
    }
}

export default new ConvertService();
