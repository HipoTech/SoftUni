import { Component, OnInit } from '@angular/core';
import { ShopService } from "./shop.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  show = true;

  get allProducts() {
    return this.shopService.products;
  }

  get allBrands() {
    return this.shopService.brands;
  }

  get allCategories() {
    return this.shopService.categories;
  }

  constructor(private shopService: ShopService) {
    this.shopService.getAllProducts();
    this.shopService.getAllBrands();
    this.shopService.getAllCategories();
  }

  ngOnInit() {
  }


}
