import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() product: Product;
  @Input() allProducts: Product[];

  constructor() { }

  ngOnInit() {
  }

}
