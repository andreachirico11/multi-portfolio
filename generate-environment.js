require('dotenv').config();

console.info('-> READING ENVIRONMENTS');
const { PRODUCTION = false, APP_ID = '' } = process.env;
console.log('production: ' + PRODUCTION);
console.log('APP_ID: ' + APP_ID);
console.log('------------------');
if (!!!APP_ID) {
  console.error('-> MISSING ENVIRONMENT');
  process.exit(1);
}

const fs = require('fs');
const environmentFilePath = 'src';
const environmentFileName = 'environment.ts';
const evironmentContent = `
 export const environment = {
    production: ${PRODUCTION},
    appId: "${APP_ID}",
   jsonConfigPath: 'assets/jsonConfigs',
  };
`;

try {
  process.chdir(environmentFilePath);
} catch (error) {
  console.error('-> ERROR MOVING TO THE WORKING DIRECTORY');
  console.error(error);
  process.exit(1);
}

console.info('-> WRITING ENVIRONMENT TS FILE');
fs.writeFile(environmentFileName, evironmentContent, (err) => {
  if (!!err) {
    console.error('-> ERROR GENERATING ENVIRONMENTS');
    console.error(err);
  }
    console.info('-> ENVIRONMENT FILE GENERATED SUCCESSFULLY');
  });
