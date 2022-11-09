import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HexagonComponent } from './_component/hexagon/hexagon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from './_component/base/base.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DistictComponent } from './_component/distict/distict.component';
import { WorldComponent } from './_component/world/world.component';
import { FlatTopHexagonComponent } from './_component/flat-top-hexagon/flat-top-hexagon.component';
import { PointedTopHexagonComponent } from './_component/pointed-top-hexagon/pointed-top-hexagon.component';

@NgModule({
  declarations: [
    AppComponent,
    HexagonComponent,
    BaseComponent,
    DistictComponent,
    WorldComponent,
    FlatTopHexagonComponent,
    PointedTopHexagonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
