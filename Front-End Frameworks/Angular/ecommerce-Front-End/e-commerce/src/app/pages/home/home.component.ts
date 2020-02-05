import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get allProducts() {
    return this.homeService.products;
  }

  get allBrands() {
    return this.homeService.brands;
  }

  get allCategories() {
    return this.homeService.categories;
  }

  constructor(private homeService: HomeService) {
    this.homeService.getAllProducts();
    this.homeService.getAllBrands();
    this.homeService.getAllCategories();
  }

  ngOnInit() {

  }

}
