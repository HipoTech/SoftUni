import { Component, OnInit, Input } from '@angular/core';
import { DetailPageService } from './detail-page.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  productId: string;

  get allBrands() {
    return this.detailService.brands;
  }

  get allCategories() {
    return this.detailService.categories;
  }

  get product() {
    return this.detailService.product;
  }

  constructor(private detailService: DetailPageService, private route: ActivatedRoute) {
    this.detailService.getAllBrands();
    this.detailService.getAllCategories();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
    this.detailService.getProduct(this.productId)
    // of(this.detailService.getProduct(this.productId)).pipe(product => {
    //   return product;
    // })
  }

}
