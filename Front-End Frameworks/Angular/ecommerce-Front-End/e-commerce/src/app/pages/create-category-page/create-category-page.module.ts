import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCategoryPageRoutingModule } from './create-category-page-routing.module';
import { CreateCategoryPageComponent } from './create-category-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule } from '@angular/material';


@NgModule({
  declarations: [
    CreateCategoryPageComponent,
  ],
  imports: [
    CommonModule,
    CreateCategoryPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class CreateCategoryPageModule { }
