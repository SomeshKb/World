import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  countryIcon = "assets/flags/india-circular.png"
  constructor() { }

  ngOnInit(): void {
  }

}
