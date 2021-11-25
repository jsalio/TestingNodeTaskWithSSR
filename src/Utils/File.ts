import * as Fs from 'fs';
import { FileStructcutre } from './FileStructcutre';

export const updateLogFile = (path: string, message: string, status: '' | 'success' | 'error') => {
    const file = Fs.readFileSync(path, 'utf8');
    const fileObject = JSON.parse(file);
    fileObject.messages.push({
        runningDate: new Date().toISOString(),
        message,
        status
    });
    fileObject.lastRun = new Date();
    Fs.writeFileSync(path, JSON.stringify(fileObject));
}

export const tryToOpenLogFile = (path: string) => {
    try {
        // tslint:disable-next-line: no-bitwise
        Fs.accessSync(path, Fs.constants.R_OK | Fs.constants.W_OK);
        Fs.readFile(path, (err, data) => {
            if (err) throw err;
            const content: FileStructcutre = JSON.parse(data.toString());
            console.log(content.lastRun);
        })
        return true;
    } catch (error) {
        return false;
    }
}
