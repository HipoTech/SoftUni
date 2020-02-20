import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-product-derail',
  templateUrl: './product-derail.component.html',
  styleUrls: ['./product-derail.component.scss'],
  animations: [
    trigger('fadeInState', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', animate('2000ms ease-out')),
    ])
  ]
})
export class ProductDerailComponent implements OnInit {
  @Input() product: Product;
  show = true;

  constructor() { }

  get stateName() {
    return this.show ? 'start' : 'end'
  }

  startAnimation() {
    this.show = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.startAnimation()
      console.log('yes');

    }, 300);
  }

}
