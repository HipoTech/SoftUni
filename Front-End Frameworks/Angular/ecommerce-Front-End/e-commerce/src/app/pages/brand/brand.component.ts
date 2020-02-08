import { Component, OnInit } from '@angular/core';
import { BrandService } from './brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  get allBrands() {
    return this.brandService.brands;
  }

  get allCategories() {
    return this.brandService.categories;
  }

  constructor(private brandService: BrandService) {
    this.brandService.getAllBrands();
    this.brandService.getAllCategories();
  }

  ngOnInit() {
  }

}
