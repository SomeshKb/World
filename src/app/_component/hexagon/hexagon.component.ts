import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hexagon',
  templateUrl: './hexagon.component.html',
  styleUrls: ['./hexagon.component.scss']
})
export class HexagonComponent implements OnInit {
  title = 'World';

  noOfRow = 40;
  noOfCol = 20

  color: tileColor = {
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  getColor(i: number) {
    return this.color[i] ? this.color[i] : 'blue';
  }

  onClick(i: number, j: number) {
    console.log(i,j);
  }
}

  interface tileColor {
    [key: number]: string
  }
  