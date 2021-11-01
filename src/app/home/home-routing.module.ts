import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { routes } from "./home.routes";

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
