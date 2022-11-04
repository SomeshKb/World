import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  { path: "", component: WorldComponent },
  { path: "base/:x/:y", component: BaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
