import { CustomError } from '../exceptions/CustomError.js';
function handleError(err, req, res, next) {
    let customError = err;
    if (!(err instanceof CustomError)) {
        customError = new CustomError('Oh no, this is embarrasing. We are having troubles my friend');
    }
    res.status(customError.status).send(customError);
}
export default handleError;
