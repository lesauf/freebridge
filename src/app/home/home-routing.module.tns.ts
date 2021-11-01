import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { routes } from "./home.routes";

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
