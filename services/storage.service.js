import { homedir } from 'node:os';
import { join } from 'node:path';

const filePath = join(homedir(), 'weather-data.json');

const saveKeyValue = (key, value) => {

};

export { saveKeyValue };