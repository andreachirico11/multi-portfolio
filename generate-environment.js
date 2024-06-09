require('dotenv').config();

console.info('-> READING ENVIRONMENTS');
const { PRODUCTION = false, CONFIG_URL = '', COMPONENTS_CONFIG_URL = '' } = process.env;
console.log('production: ' + PRODUCTION);
console.log('configUrl: ' + CONFIG_URL);
console.log('componentsConfigUrl: ' + COMPONENTS_CONFIG_URL);
console.log('------------------');
if (!!!CONFIG_URL || !!!COMPONENTS_CONFIG_URL) {
  console.error('-> MISSING ENVIRONMENT');
  process.exit(1);
}

const fs = require('fs');
const environmentFilePath = 'src';
const environmentFileName = 'environment.ts';
const evironmentContent = `
 export const environment = {
    production: ${PRODUCTION},
    configUrl: "${CONFIG_URL}",
    componentsConfigUrl: "${COMPONENTS_CONFIG_URL}"
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
