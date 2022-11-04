import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  baseLocation: Position | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (isNaN(params['x']) || isNaN(params['y'])) {
        this.router.navigateByUrl("/");
      } else {
        this.baseLocation = params as Position;
      }

    })
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