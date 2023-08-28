import fs from 'fs';
import fsPromise from 'fs/promises';
import path from 'path';

import convert from 'xml-js';

import * as url from 'url';
import { IBankCards } from '../types/bank.interface.js';
import { responceArrayMaker } from '../lib/responceArrayMaker.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const targetFolder = path.join(__dirname, '../download/export');
const getTargetFilePath = (targetFolder: string) =>
    fs.readdirSync(targetFolder)[0];

class ConvertService {
    async xmlToJson() {
        try {
            let sourceObject: IBankCards = await fsPromise
                .readFile(
                    `${targetFolder}/${getTargetFilePath(targetFolder)}`,
                    'utf-8'
                )
                .then((data) =>
                    convert.xml2json(data, {
                        compact: true,
                        spaces: 4,
                    })
                )
                .then((json) => JSON.parse(json))
                .catch((e) => console.log(e));

            return responceArrayMaker(sourceObject);
        } catch (e) {
            console.log('convert error');
        }
    }
}

export default new ConvertService();
