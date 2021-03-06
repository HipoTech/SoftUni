import { Component, OnInit } from '@angular/core';
import { CategoryPageService } from './category-page.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  get allCategories() {
    return this.categoryService.categories;
  }

  get allBrands() {
    return this.categoryService.brands;
  }


  constructor(private categoryService: CategoryPageService) {
    this.categoryService.getAllCategories();
    this.categoryService.getAllBrands();
  }

  ngOnInit() {
  }

}
