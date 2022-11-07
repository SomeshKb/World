import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-distict',
  templateUrl: './distict.component.html',
  styleUrls: ['./distict.component.scss']
})
export class DistictComponent implements OnInit {

  title = 'World';

  noOfRow = 10;
  noOfCol = 10

  color: tileColor = {
  }

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getColor(i: number) {
    return this.color[i] ? this.color[i] : 'blue';
  }

  onClick(i: number, j: number) {
    this.dialog.closeAll();
    this.dialog.open(BaseComponent, { data: { x: i, y: j } })
    // this.router.navigate(['base', i, j]);
  }
}

interface tileColor {
  [key: number]: string
}
