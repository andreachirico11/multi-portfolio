import { bootstrapApplication } from '@angular/platform-browser';
import { getAppCofing } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppConfiguration } from './app/types,interfaces/AppConfiguration';
import { environment } from './environment.sample';

const {production, configUrl, componentsConfigUrl} = environment;
if (!production) {
  console.info('**************');
  console.info("ACTUAL RUNNING ENVIRONMENTS");
  console.info('  production: ' + production);
  console.info('  configUrl: ' + configUrl);
  console.info('  componentsConfigUrl: ' + componentsConfigUrl);
  console.info('**************');
}

fetch(environment.configUrl)
  .then((r) => r.json())
  .then((config: AppConfiguration) => {
    return bootstrapApplication(AppComponent, getAppCofing(config));
  }).catch((err) => console.error(err));
