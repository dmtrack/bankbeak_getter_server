var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Record } from '../db/models/log.js';
import { CustomError } from '../exceptions/CustomError.js';
class DbService {
    upload(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, beak, corrAccount } = data;
                const newRecord = yield Record.create({
                    beak: beak,
                    name: name,
                    corrAccount: corrAccount,
                });
                return newRecord;
            }
            catch (e) {
                new CustomError('create record error', e);
            }
        });
    }
    getRecords() {
        return __awaiter(this, void 0, void 0, function* () {
            const records = yield Record.findAll();
            return records;
        });
    }
}
export default new DbService();
