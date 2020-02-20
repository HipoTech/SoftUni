import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.scss']
})
export class CategoryTabComponent implements OnInit {
  @Input() allCategories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
