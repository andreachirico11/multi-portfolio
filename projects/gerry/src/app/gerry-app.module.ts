import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GerryAppComponent } from "./gerry-app.component";
import { routes } from "./app.routes";

@NgModule({
  imports: [GerryAppComponent, RouterModule.forChild([
    {
      path: '',
      component: GerryAppComponent,
      children: routes
    }
  ])],
})
export class GerryAppModule {}
