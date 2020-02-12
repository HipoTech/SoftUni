import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProductPageRoutingModule } from './create-product-page-routing.module';
import { CreateProductPageComponent } from './create-product-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    CreateProductPageComponent
  ],
  imports: [
    CommonModule,
    CreateProductPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class CreateProductPageModule { }
