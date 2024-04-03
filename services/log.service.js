import chalk from 'chalk';
import dedent from 'dedent-js';
const {
    bgRed,
    bgGreen,
    bgCyan
} = chalk;
const printError = (error) => {
    console.log(`${bgRed('Error:')} ${error}`);
};
const printSuccess = (message) => {
    console.log(`${bgGreen('Success:')} ${message}`);
};
const printHelp = () => {
    console.log(
        dedent`
        ${bgCyan('Help:')} 
        Без параметров - вывод погоды
        -s [CITY] - для установки города
        -h - для вывода помощи
        -t - для сохранения токена
        `
    );
};

export { printError, printSuccess, printHelp };