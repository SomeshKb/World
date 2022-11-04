import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from 'src/app/base/base.component';
import { DistictComponent } from 'src/app/distict/distict.component';

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

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DistictComponent, {panelClass : 'ww-base'});
  }

  ngOnInit(): void {
  }

  getColor(i: number) {
    return this.color[i] ? this.color[i] : 'blue';
  }

  onClick(i: number, j: number) {
    this.openDialog();
    console.log(i, j);
  }
}

interface tileColor {
  [key: number]: string
}
