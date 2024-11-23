import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GerryAppComponent } from "../../projects/gerry/src/app/gerry-app.component";
import {gerry as gerryRoute} from './app.roots.routes';

@NgModule({
  imports: [
    GerryAppComponent,
    RouterModule.forChild([gerryRoute]),
  ],
})
export class gerry {}
