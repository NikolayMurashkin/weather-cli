#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        // сохранить город
    }
    if (args.t) {
        saveKeyValue('token', args.t);
    }

    // вывести погоду
};

initCLI();
