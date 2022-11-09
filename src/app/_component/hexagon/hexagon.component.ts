import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  getColor(i: number) {
    return this.color[i] ? this.color[i] : 'blue';
  }

  onClick(i: number, j: number) {
    console.log(i,j)
    this.router.navigate(['distict', i, j]);
  }
}

interface tileColor {
  [key: number]: string
}
