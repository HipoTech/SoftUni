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

  constructor(private categoryService: CategoryPageService) {
    this.categoryService.getAllCategories();
  }

  ngOnInit() {
  }

}
