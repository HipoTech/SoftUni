import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
    name: new FormControl(''),
    imageUrl: new FormControl(''),
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
}
