import { bootstrapApplication } from '@angular/platform-browser';
import { getAppCofing } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppConfiguration } from './app/types,interfaces/AppConfiguration';
import { environment } from './environments/environment';

console.log(environment);


fetch(environment.configUrl)
  .then((r) => r.json())
  .then((config: AppConfiguration) => {
    return bootstrapApplication(AppComponent, getAppCofing(config));
  }).catch((err) => console.error(err));
