import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { AdjacentDistict, calculateNextDistict, Postion } from '../../model/adjacent-distict';
@Component({
  selector: 'app-distict',
  templateUrl: './distict.component.html',
  styleUrls: ['./distict.component.scss']
})
export class DistictComponent implements OnInit {

  title = 'World';
  adjacentDistict = AdjacentDistict;
  noOfRow = 10;
  noOfCol = 10

  distict = [2, 3, 2]

  gridArray = [4, 5, 6, 7, 6, 5, 4]
  largestRow = 7;
  currentDistict: Postion = { x: -1, y: -1 }

  color: tileColor = {
  }

  tileMap: Map<String, Postion> = new Map();

  constructor(private router: Router, private dialog: MatDialog, private route: ActivatedRoute) {
    route.paramMap.subscribe((res: Params) => {
      this.currentDistict = res['params'];
      Object.values(AdjacentDistict).map(x => {
        let postion: Postion = calculateNextDistict(x, this.currentDistict);
        this.tileMap.set(x, postion)
      });
    })
}

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
getStartingMargin(value: number, midRowValue: number) {
  return ((midRowValue - value) * 33);
}

adjacentMartrix(adjacentDistict: AdjacentDistict) {
  console.log(adjacentDistict)
  let { x, y }: Postion = calculateNextDistict(adjacentDistict, this.currentDistict);
  this.router.navigate(['distict', x, y]);
}
}

interface tileColor {
  [key: number]: string
}
