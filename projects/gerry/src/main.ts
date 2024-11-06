import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { browserConfig } from './main.server';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
 bootstrapApplication(AppComponent, browserConfig);
