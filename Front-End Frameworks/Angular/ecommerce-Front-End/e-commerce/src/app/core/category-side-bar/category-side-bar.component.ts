import { Component, OnInit, Input, Output } from '@angular/core';
import { Category, Brand } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-category-side-bar',
  templateUrl: './category-side-bar.component.html',
  styleUrls: ['./category-side-bar.component.scss']
})
export class CategorySideBarComponent implements OnInit {
  @Input() allCategories: Category[];
  @Input() category: Category;
  @Input() brand: Brand;

  constructor() { }

  ngOnInit() {
  }

}
