require('dotenv').config();
const { writeFile } = require('fs');
const { argv } = require('yargs');

const env_instance: string = argv.env;
const isProduction: boolean = env_instance.toUpperCase() === 'PROD';
let defaultUnit: string = '';
let defaultLang: string = '';

if (!process.env['API_KEY']) {
  console.error('This api key from open weather map is required ! ');
  process.exit(-1);
}

if (!process.env['API_UNITS']) {
  defaultUnit = 'metric';
} else {
  defaultUnit = process.env['API_UNITS'];
}

if (!process.env['API_LANG']) {
  defaultLang = 'en';
} else {
  defaultLang = process.env['API_LANG'];
}

const envTargetFile = isProduction
  ? './src/environments/environment.prod.ts'
  : './src/environments/environment.ts';

const envContent = `export const environment = {
    production: ${isProduction},
    apiKey: "${process.env['API_KEY']}",
    units: "${defaultUnit}",
    lang: "${defaultLang}",
    baseUrlOpenWeather: 'https://api.openweathermap.org/data/2.5',
  }; `;

writeFile(envTargetFile, envContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Set variables to ${envTargetFile}`);
});
