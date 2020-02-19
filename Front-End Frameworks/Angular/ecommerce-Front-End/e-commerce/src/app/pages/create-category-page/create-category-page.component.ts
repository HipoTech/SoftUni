import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CreateCategoryPageService } from './create-category-page.service';

@Component({
  selector: 'app-create-category-page',
  templateUrl: './create-category-page.component.html',
  styleUrls: ['./create-category-page.component.scss']
})
export class CreateCategoryPageComponent implements OnInit {

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  createCategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.createCategoryForm.value);
    this.createCategoryPageService.createCategory(this.createCategoryForm.value)
  }

  constructor(fb: FormBuilder, private createCategoryPageService: CreateCategoryPageService) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit() {
  }

  get checkName() { return !!(this.createCategoryForm.get('name').errors && (this.createCategoryForm.get('name').touched || this.createCategoryForm.get('name').dirty)) }
  get checkImgUrl() { return !!(this.createCategoryForm.get('imageUrl').errors && (this.createCategoryForm.get('imageUrl').touched || this.createCategoryForm.get('imageUrl').dirty)) }

}
