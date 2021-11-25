import * as Schedule from 'node-schedule';
import * as Fs from 'fs';
import { tryToOpenLogFile, updateLogFile } from './Utils/File';

const filePath = 'V:\\test\\test\\data.json';
const directory = 'V:\\test\\test';
const regex = new RegExp(/(\bbatch-data[a-zA-Z0-9_-]*\b)+(.json)$/);
const second = "*";
const minute = "*";
const hour = "*";
const dayOfMonth = "*";
const month = "*";
const dayOfWeek = "*";

export const runningTask = () => {
    Schedule.scheduleJob(`${second} ${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`, () => {
        const stringDate = new Date().toLocaleString();
        console.log(`The answer to life, the universe, and everything ${new Date().toDateString()}!`);
        tryToOpenLogFile(filePath);
        Fs.readdir(directory, (err, files) => {
            if (err)
                throw err;
            files.forEach(file => {
                if (regex.test(file)) {
                    console.log(file);
                }
            });
        });
        updateLogFile(filePath, `The answer to life, the universe, and everything ${stringDate}!`, 'success');
    });
};
