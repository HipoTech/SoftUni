import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-features-items',
  templateUrl: './features-items.component.html',
  styleUrls: ['./features-items.component.scss']
})
export class FeaturesItemsComponent implements OnInit {
  @Input() allProducts: Product[];

  constructor() { }

  ngOnInit() {
  }

}
