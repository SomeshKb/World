import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistictComponent } from './_component/distict/distict.component';
import { WorldComponent } from './_component/world/world.component';

const routes: Routes = [
  { path: "", component: WorldComponent },
  { path: "distict/:x/:y", component: DistictComponent , data: { animation: true }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
