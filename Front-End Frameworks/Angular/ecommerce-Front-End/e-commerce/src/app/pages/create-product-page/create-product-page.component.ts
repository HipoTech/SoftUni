import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { CreateProductPageService } from './create-product-page.service';

@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateProductPageComponent implements OnInit {

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  panelColor = new FormControl('yellow');

  constructor(fb: FormBuilder, private createProductService: CreateProductPageService) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
    this.createProductService.getAllBrands();
    this.createProductService.getAllCategories();
  }

  createProductForm = new FormGroup({
    title: new FormControl(''),
    webId: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
    condition: new FormControl(''),
    availability: new FormControl(''),
    onSlider: new FormControl(''),
    featuredItem: new FormControl(''),
    recommended: new FormControl(''),
    brand: new FormControl(''),
    category: new FormControl(''),
  });

  onSubmit() {
    this.createProductService.createProduct(this.createProductForm.value)
    this.createProductForm.reset;
  }

  get allBrands() {
    return this.createProductService.brands;
  }

  get allCategories() {
    return this.createProductService.categories;
  }

  ngOnInit() {
  }

}
