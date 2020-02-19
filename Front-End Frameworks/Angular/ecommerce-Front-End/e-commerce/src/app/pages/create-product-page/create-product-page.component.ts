import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { CreateProductPageService } from './create-product-page.service';
import { Router } from '@angular/router';

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

  constructor(fb: FormBuilder, private createProductService: CreateProductPageService, private router: Router) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
    this.createProductService.getAllBrands();
    this.createProductService.getAllCategories();
  }

  createProductForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    webId: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    condition: new FormControl('', [Validators.required]),
    availability: new FormControl(''),
    onSlider: new FormControl(''),
    featuredItem: new FormControl(''),
    recommended: new FormControl(''),
    brand: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.createProductService.createProduct(this.createProductForm.value)
    this.router.navigate(['/shop']);
  }

  get allBrands() {
    return this.createProductService.brands;
  }

  get allCategories() {
    return this.createProductService.categories;
  }

  ngOnInit() {
  }

  get checkTitle() { return !!(this.createProductForm.get('title').errors && (this.createProductForm.get('title').touched || this.createProductForm.get('title').dirty)) }
  get checkWebId() { return !!(this.createProductForm.get('webId').errors && (this.createProductForm.get('webId').touched || this.createProductForm.get('webId').dirty)) }
  get checkPrice() { return !!(this.createProductForm.get('price').errors && (this.createProductForm.get('price').touched || this.createProductForm.get('price').dirty)) }
  get checkDescription() { return !!(this.createProductForm.get('description').errors && (this.createProductForm.get('description').touched || this.createProductForm.get('description').dirty)) }
  get checkImageUrl() { return !!(this.createProductForm.get('imageUrl').errors && (this.createProductForm.get('imageUrl').touched || this.createProductForm.get('imageUrl').dirty)) }
  get checkCondition() { return !!(this.createProductForm.get('condition').errors && (this.createProductForm.get('condition').touched || this.createProductForm.get('condition').dirty)) }
  get checkBrand() { return !!(this.createProductForm.get('brand').errors && (this.createProductForm.get('brand').touched || this.createProductForm.get('brand').dirty)) }
  get checkCategory() { return !!(this.createProductForm.get('category').errors && (this.createProductForm.get('category').touched || this.createProductForm.get('category').dirty)) }

}
