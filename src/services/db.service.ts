import { type } from 'os';
import {
    ICreateRecord,
    IFileRecord,
    IUploadRequest,
} from '../db/models/log.interface.js';
import { Record } from '../db/models/log.js';
import { CustomError } from '../exceptions/CustomError.js';

interface IDbService {
    upload: (data: IUploadRequest) => Promise<IFileRecord | undefined>;
    getRecords: () => Promise<Record[]>;
}

class DbService implements IDbService {
    async upload(data: IUploadRequest) {
        try {
            let { name, beak, corrAccount } = data;
            const newRecord: IFileRecord = await Record.create({
                beak: beak,
                name: name,
                corrAccount: corrAccount,
            });
            return newRecord;
        } catch (e: any) {
            new CustomError('create record error', e);
        }
    }

    async getRecords() {
        const records = await Record.findAll();
        return records;
    }
}

export default new DbService();
