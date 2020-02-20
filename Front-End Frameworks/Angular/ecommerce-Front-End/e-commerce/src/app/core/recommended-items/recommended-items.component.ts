import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-recommended-items',
  templateUrl: './recommended-items.component.html',
  styleUrls: ['./recommended-items.component.scss']
})
export class RecommendedItemsComponent implements OnInit {
  @Input() allProducts: Product[];

  constructor() { }

  ngOnInit() {
  }

}
