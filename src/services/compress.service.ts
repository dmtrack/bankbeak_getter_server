import path from 'path';
import AdmZip from 'adm-zip';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const outputPath = path.join(__dirname, '../download/export');

class CompressService {
    async unzipFiles() {
        try {
            const zip = new AdmZip('./src/download/file.zip');
            zip.extractAllTo(outputPath, true);
        } catch (e) {
            console.log('decompress error');
        }
    }
}

export default new CompressService();
