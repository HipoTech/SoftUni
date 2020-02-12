import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
    name: new FormControl(''),
    imageUrl: new FormControl(''),
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

}
