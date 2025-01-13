import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const dirPath = './src/environments';
const targetPath = join(dirPath, 'environment.ts');

if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
}

const envConfigFile = `
export const environment = {
    BACKEND_URL: '${process.env.BACKEND_URL}'
};
`;

writeFileSync(targetPath, envConfigFile, { encoding: 'utf8' });
console.log(`Environment file generated at ${targetPath}`);
