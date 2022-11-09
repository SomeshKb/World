import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class  BaseComponent implements OnInit {

  baseLocation: Position | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Position,private dialogRef: MatDialogRef<BaseComponent>) { 
    console.log(data)
    this.baseLocation = data;
  }

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   if (isNaN(params['x']) || isNaN(params['y'])) {
    //     this.router.navigateByUrl("/");
    //   } else {
    //     this.baseLocation = params as Position;
    //   }

    // })
  }
}


type Position = {
  x: number,
  y: number
}

function isNumber(value: string | number): boolean {
  return ((value != null) &&
    (value !== '') &&
    !isNaN(Number(value.toString())));
}