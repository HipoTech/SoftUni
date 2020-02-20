import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-product-small',
  templateUrl: './product-small.component.html',
  styleUrls: ['./product-small.component.scss']
})
export class ProductSmallComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
