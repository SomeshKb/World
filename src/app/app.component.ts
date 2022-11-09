import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInOut } from 'src/animation/route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOut]
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet)
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData['fadeInOut']
    );
  }
}
