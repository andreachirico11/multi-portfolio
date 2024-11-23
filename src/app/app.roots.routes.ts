import { GerryAppComponent } from "../../projects/gerry/src/app/gerry-app.component";
import { routes as gerryRoutes } from '../../projects/gerry/src/app/app.routes';
import { Route } from "@angular/router";

export const gerry: Route = {
  path: '',
  component: GerryAppComponent,
  children: gerryRoutes,
};
