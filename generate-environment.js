require('dotenv').config();

console.info('-> READING ENVIRONMENTS');
const { PRODUCTION = false, APP_IDS = '', PROD_APP_TAB_NAME = '' } = process.env;
console.log('production: ' + PRODUCTION);
console.log('APP_IDS: ' + APP_IDS);
console.log('PROD_APP_TAB_NAME: ' + PROD_APP_TAB_NAME);
console.log('------------------');
if (!!!APP_IDS) {
  console.error('-> MISSING ENVIRONMENT');
  process.exit(1);
}

const fs = require('fs');
const environmentFilePath = 'src';
const environmentFileName = 'environment.ts';
const evironmentContent = `
 export const environment = {
    production: ${PRODUCTION},
    appIds: "${APP_IDS}",
    prodAppTabName: "${PROD_APP_TAB_NAME}",
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
