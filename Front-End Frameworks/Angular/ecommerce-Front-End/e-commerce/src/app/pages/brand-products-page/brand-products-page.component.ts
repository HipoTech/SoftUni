import { Component, OnInit, Input } from '@angular/core';
import { BrandProductPageService } from './brand-products-page.service';

import { ActivatedRoute } from '@angular/router';
import { Product, Brand } from 'src/app/shared/interfaces';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-brand-products-page',
  templateUrl: './brand-products-page.component.html',
  styleUrls: ['./brand-products-page.component.scss']
})
export class BrandProductPageComponent implements OnInit {
  brandId: string;

  get allBrands() {
    return this.brandProductService.brands;
  }

  get allCategories() {
    return this.brandProductService.categories;
  }

  get allProducts() {
    return this.brandProductService.productFromDb;
  }

  constructor(private brandProductService: BrandProductPageService, private route: ActivatedRoute) {
    this.brandProductService.getAllBrands();
    this.brandProductService.getAllCategories();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.brandId = params['id'];
    });
    this.brandProductService.getBrand(this.brandId);
  }

}
