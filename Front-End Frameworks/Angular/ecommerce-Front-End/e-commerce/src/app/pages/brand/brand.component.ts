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

  constructor(private brandService: BrandService) {
    this.brandService.getAllBrands();
  }

  ngOnInit() {
  }

}
