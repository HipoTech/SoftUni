import { Component, OnInit, Input } from '@angular/core';
import { Product, Brand } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-product-derail',
  templateUrl: './product-derail.component.html',
  styleUrls: ['./product-derail.component.scss']
})
export class ProductDerailComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
