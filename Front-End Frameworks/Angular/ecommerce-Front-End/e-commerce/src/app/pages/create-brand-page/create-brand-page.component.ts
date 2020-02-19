import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CreateBrandPageService } from './create-brand-page.service';

@Component({
  selector: 'app-create-brand-page',
  templateUrl: './create-brand-page.component.html',
  styleUrls: ['./create-brand-page.component.scss']
})
export class CreateBrandPageComponent implements OnInit {

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  createBrandForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
  });


  constructor(fb: FormBuilder, private createBrandService: CreateBrandPageService) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  onSubmit() {
    console.log('sended');

    this.createBrandService.createBrand(this.createBrandForm.value)
    this.createBrandForm.reset;
  }

  ngOnInit() {
  }

  get checkName() { return !!(this.createBrandForm.get('name').errors && (this.createBrandForm.get('name').touched || this.createBrandForm.get('name').dirty)) }
  get checkImgUrl() { return !!(this.createBrandForm.get('imageUrl').errors && (this.createBrandForm.get('imageUrl').touched || this.createBrandForm.get('imageUrl').dirty)) }


}
