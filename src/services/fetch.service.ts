import { Record } from '../db/models/log.js';
import { CustomError } from '../exceptions/CustomError.js';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import fetch, { Response } from 'node-fetch';

interface IFetchService {
    getRecords: () => Promise<Record[]>;
}

interface IAPIOptions {
    method: string;
    headers: {
        'X-RapidAPI-Key': string;
        'X-RapidAPI-Host': string;
    };
}

class FetchService {
    async downloadBeakData() {
        try {
            const streamPipeline = promisify(pipeline);
            const response: Response = await fetch(
                'http://www.cbr.ru/s/newbik'
            );

            if (!response.ok)
                throw new Error(`unexpected response ${response.statusText}`);
            if (response.body) {
                await streamPipeline(
                    response.body,
                    createWriteStream('./src/download/file.zip')
                );
            }
        } catch (e) {
            new CustomError('download beak data error');
        }
    }
}

export default new FetchService();
