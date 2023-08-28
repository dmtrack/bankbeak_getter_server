var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { server } from './app.js';
const port = process.env.PORT;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        server.listen(port, () => {
            console.log(`Server has succesfully started on port:${port}`);
        });
    }
    catch (e) {
        console.log(e);
    }
});
start();
