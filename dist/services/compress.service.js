var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import path from 'path';
import AdmZip from 'adm-zip';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const outputPath = path.join(__dirname, '../download/export');
class CompressService {
    unzipFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const zip = new AdmZip('./src/download/file.zip');
                zip.extractAllTo(outputPath, true);
            }
            catch (e) {
                console.log('decompress error');
            }
        });
    }
}
export default new CompressService();
