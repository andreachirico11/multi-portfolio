import { bootstrapApplication } from '@angular/platform-browser';
import { GerryAppComponent } from './app/gerry-app.component';
import { browserConfig } from './main.server';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
 bootstrapApplication(GerryAppComponent, browserConfig);
