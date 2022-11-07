import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { DistictComponent } from './distict/distict.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  { path: "", component: WorldComponent },
  { path: "distict/:x/:y", component: DistictComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
