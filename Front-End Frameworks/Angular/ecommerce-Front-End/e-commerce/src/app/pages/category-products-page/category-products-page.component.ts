import { Component, OnInit } from '@angular/core';
import { CategoryProductPageService } from './category-products-page.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products-page',
  templateUrl: './category-products-page.component.html',
  styleUrls: ['./category-products-page.component.scss']
})
export class CategoryProductPageComponent implements OnInit {
  productId: string;

  get allBrands() {
    return this.categoryProductService.brands;
  }

  get allCategories() {
    return this.categoryProductService.categories;
  }

  get allProducts() {
    return this.categoryProductService.productFromDb;
  }

  constructor(private categoryProductService: CategoryProductPageService, private route: ActivatedRoute) {
    this.categoryProductService.getAllBrands();
    this.categoryProductService.getAllCategories();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
    this.categoryProductService.getCategory(this.productId)
  }

}
