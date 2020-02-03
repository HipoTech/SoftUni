import { Component, OnInit } from '@angular/core';
import { ShopService } from "./shop.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  get allProducts() {
    return this.shopService.products;
  }

  constructor(private shopService: ShopService) {
    this.shopService.getAllProducts();
  }

  ngOnInit() {
  }


}
