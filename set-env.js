const { writeFileSync } = require('fs');

const targetPath = './src/environments/environment.ts';

const envConfigFile = `
export const environment = {
    production: ${process.env.NODE_ENV === 'production'},
    BACKEND_URL: '${process.env.BACKEND_URL}'
};
`;

writeFileSync(targetPath, envConfigFile, { encoding: 'utf8' });
console.log(`Environment file generated at ${targetPath}`);
