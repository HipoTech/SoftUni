import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCategoryPageRoutingModule } from './create-category-page-routing.module';
import { CreateCategoryPageComponent } from './create-category-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { SharedComponentsModule } from 'src/app/core/shared-components.module';


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
    SharedComponentsModule,
  ]
})
export class CreateCategoryPageModule { }
