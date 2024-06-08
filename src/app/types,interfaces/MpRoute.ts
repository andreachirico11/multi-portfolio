import { ActivatedRouteSnapshot, Route } from "@angular/router";
import { ComponentIdentity } from "./ComponentIdentity";

export interface MpRoute extends Route {
  data: ComponentIdentity;
}
